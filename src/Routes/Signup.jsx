import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import FormField from '../Components/Form/FormField'
import FormPasswordField from '../Components/Form/FormPasswordField'
import PrimaryButton from '../Components/PrimaryButton'
import { ClipLoader } from 'react-spinners'
import { signup } from '../features/auth/auth.slice'
import { signupSelector } from '../features/auth/auth.selector'

const newUserSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required').min(8),
    confirmPassword: yup
        .string()
        .required('Required')
        .oneOf(
            [yup.ref('password'), null],
            'password and confirm password does not match.'
        ),
    termsPolicy: yup.bool().oneOf([true]),
})

const defaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsPolicy: false,
}

export default function SignUp() {
    const { isLoading, isError } = useSelector(signupSelector)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(newUserSchema),
        defaultValues,
    })

    useEffect(() => {
        console.log(isError)
    }, [])
    const onSubmit = (data) => {
        // dispatch(signup(data))

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userData) => {
                reset()
                userData.user.displayName = data.name

                dispatch(login(userData))
                setIsLoading(false)
                setTimeout(() => {
                    navigate('/', { replace: true })
                }, 1000)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="min-w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
                <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
                    Sign Up
                </h2>

                <form
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-80"
                >
                    <div className="mb-3">
                        <FormField
                            type="text"
                            label="Name *"
                            identity="name"
                            error={errors.name}
                            register={register('name')}
                            autoComplete="name"
                            control={control}
                        />
                    </div>

                    <div className="mb-3">
                        <FormField
                            type="email"
                            label="Email *"
                            error={errors.email}
                            register={register('email')}
                            autoComplete="email"
                            control={control}
                        />
                    </div>

                    <div className="mb-3">
                        <FormPasswordField
                            label="Password *"
                            identity="password"
                            autoComplete="new-password"
                            error={errors.password}
                            register={register('password')}
                            control={control}
                        />
                    </div>
                    <div className="mb-3">
                        <FormPasswordField
                            label="Confirm Password *"
                            identity="confirmPassword"
                            autoComplete="new-password"
                            error={errors.confirmPassword}
                            register={register('confirmPassword')}
                            control={control}
                        />
                    </div>

                    <div className="mb-3 flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="termsPolicy"
                            className="mt-1 rounded text-accent border-gray focus:outline-accent"
                            {...register('termsPolicy')}
                            control={control}
                        />
                        <label
                            htmlFor="#termsPolicy"
                            className={`text-sm ${
                                errors.termsPolicy
                                    ? 'text-danger'
                                    : 'text-gray-dark'
                            }`}
                        >
                            I agree to all{' '}
                            <Link
                                to="/signup"
                                className="hover:text-accent underline"
                            >
                                Terms & Conditions
                            </Link>{' '}
                            and{' '}
                            <Link
                                to="/signup"
                                className="underline hover:text-accent"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </label>
                    </div>

                    <PrimaryButton
                        block
                        as="submit"
                        disabled={!isDirty || !isValid}
                    >
                        {isLoading ? (
                            <ClipLoader color="#fff" size={25} />
                        ) : (
                            'Sign Up'
                        )}
                    </PrimaryButton>
                </form>

                <hr className="my-3 border-t-gray-light" />

                <p className="text-gray-dark text-center">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="font-semibold text-accent-light hover:text-accent-dark transition-colors"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
