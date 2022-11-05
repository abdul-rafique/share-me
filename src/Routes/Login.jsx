import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { ClipLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/auth.slice'
import {
    authenticationSelector,
    loginSelector,
} from '../features/auth/auth.selector'

import FormField from '../Components/Form/FormField'
import FormPasswordField from '../Components/Form/FormPasswordField'
import PrimaryButton from '../Components/PrimaryButton'

const loginSchema = yup.object({
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required'),
})

export default function Login() {
    const isAuthenticated = useSelector(authenticationSelector)
    const { isLoading, isError } = useSelector(loginSelector)
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
            email: '',
            password: '',
        },
    })

    const [credentialsErr, setCredentialsErr] = useState()

    useEffect(() => {
        if (isAuthenticated) {
            setTimeout(() => {
                navigate('/', { replace: true })
            }, 1000)
        }

        if (isError) {
            switch (isError?.code) {
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
                    setCredentialsErr('Something went wrong. Try again later.')
                    break
            }
        }
    }, [isAuthenticated])

    const onSubmit = async (data) => {
        dispatch(login({ ...data, isLoggedIn: false }))
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
                            register={register('email')}
                            error={errors.email}
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
