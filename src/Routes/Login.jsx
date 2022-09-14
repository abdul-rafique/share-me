import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../features/user/userSlice'

import FormField from '../Components/Form/FormField'
import FormPasswordField from '../Components/Form/FormPasswordField'
import PrimaryButton from '../Components/PrimaryButton'
import { ClipLoader } from 'react-spinners'

const loginSchema = yup.object({
    identifier: yup.string().email().required('Required'),
    password: yup.string().required('Required'),
})

export default function Login() {
    const isUser = useSelector((state) => state.user.user)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(loginSchema),
        defaultValues: {
            identifier: '',
            password: '',
        },
    })

    const [isLoading, setIsLoading] = useState(false)
    const [credentialsErr, setCredentialsErr] = useState()

    useEffect(() => {
        if (auth.currentUser) {
            dispatch(login(auth.currentUser))
            setTimeout(() => {
                navigate('/', { replace: true })
            }, 500)
        } else {
            dispatch(logout())
        }
    }, [])

    const onSubmit = (data) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, data.identifier, data.password)
            .then((credentials) => {
                dispatch(login(credentials))
                setIsLoading(false)
                setTimeout(() => {
                    navigate('/', { replace: true })
                }, 500)
            })
            .catch((err) => {
                console.log(err.code)
                console.log(err.message)
                switch (err.code) {
                    case 'auth/wrong-password':
                        setCredentialsErr(
                            'You enetered wrong password. If you forgot your password click on the "Forgot password" link below to reset your password.'
                        )
                        break

                    case 'auth/user-not-found':
                        setCredentialsErr(
                            'This email is not registered. Please! click on the "Signup Now" link below to register.'
                        )
                        break

                    case 'auth/too-many-requests':
                        setCredentialsErr(
                            'Too many requests! Access to this account has been temporarily disabled. You can immediately restore it by resetting your password or you can try again later.'
                        )
                        break

                    case 'auth/network-request-failed':
                        setCredentialsErr(
                            'Network connection failed. Please check your internet connection!'
                        )
                        break

                    default:
                        setCredentialsErr(
                            'Something went wrong. Try again later.'
                        )
                        break
                }
                setIsLoading(false)
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
                <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
                    Login
                </h2>
                {credentialsErr && (
                    <small className="block bg-danger/10 px-3 py-2 mb-3 rounded text-danger">
                        {credentialsErr}
                    </small>
                )}
                <form
                    method="post"
                    className="w-80"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-3">
                        <FormField
                            type="email"
                            label="Email"
                            autoComplete="email"
                            register={register('identifier')}
                            error={errors.identifier}
                            control={control}
                        />
                    </div>
                    <div className="mb-3">
                        <FormPasswordField
                            autoComplete="password"
                            register={register('password')}
                            error={errors.password}
                            control={control}
                        />
                    </div>

                    <div className="mb-3 flex justify-between">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="rounded text-accent border-gray focus:outline-accent"
                                {...register('rememberMe', { required: false })}
                            />
                            <label
                                htmlFor="#rememberMe"
                                className="text-sm text-gray-dark"
                            >
                                Remember me
                            </label>
                        </div>

                        <Link
                            to="/forgot-password"
                            className="font-semibold text-accent-light hover:text-accent-dark"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <PrimaryButton
                        as="submit"
                        block
                        disabled={!isDirty || !isValid}
                    >
                        {isLoading ? (
                            <ClipLoader color="#fff" size={25} />
                        ) : (
                            'Login'
                        )}
                    </PrimaryButton>
                </form>
                <hr className="my-3 border-t-gray-light" />

                <p className="text-gray-dark text-center">
                    Don't have an account?{' '}
                    <Link
                        to="/signup"
                        className="font-semibold text-accent-light hover:text-accent-dark transition-colors"
                    >
                        Signup Now
                    </Link>
                </p>
            </div>
        </div>
    )
}
