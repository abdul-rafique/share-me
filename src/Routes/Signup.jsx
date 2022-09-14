import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../firebase.config'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FormField from '../Components/Form/FormField'
import FormPasswordField from '../Components/Form/FormPasswordField'
import PrimaryButton from '../Components/PrimaryButton'

const newUserSchema = yup.object({
    username: yup.string().required('Required'),
    email: yup.string().email().required('Required'),
    password: yup.string().required('Required'),
    confirmPassword: yup
        .string()
        .required('Required')
        .oneOf(
            [yup.ref('password'), null],
            'password and confirm password does not match.'
        ),
})

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(newUserSchema),
    })

    const [acceptTerms, setAcceptTerms] = useState(false)

    const handleAcceptTerms = () => {
        setAcceptTerms(!acceptTerms)
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="min-w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
                <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
                    Sign Up
                </h2>

                <form
                    method="post"
                    onSubmit={handleSubmit((data) => {
                        console.info(data)
                        console.log(errors)
                    })}
                    className="w-80"
                >
                    <div className="mb-3">
                        <FormField
                            type="text"
                            label="Username *"
                            error={errors.username}
                            register={register('username')}
                            autoComplete="username"
                        />
                    </div>

                    <div className="mb-3">
                        <FormField
                            type="email"
                            label="Email *"
                            error={errors.email}
                            register={register('email')}
                            autoComplete="email"
                        />
                    </div>

                    <div className="mb-3">
                        <FormPasswordField
                            label="Password *"
                            identity="password"
                            autoComplete="new-password"
                            error={errors.password}
                            register={register('password')}
                        />
                    </div>
                    <div className="mb-3">
                        <FormPasswordField
                            label="Confirm Password *"
                            identity="confirmPassword"
                            autoComplete="new-password"
                            error={errors.confirmPassword}
                            register={register('confirmPassword')}
                        />
                    </div>

                    <div className="mb-3 flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="acceptTerms"
                            name="acceptTerms"
                            onChange={handleAcceptTerms}
                            className="mt-1 rounded text-accent border-gray focus:outline-accent"
                        />
                        <label
                            htmlFor="#acceptTerms"
                            className="text-sm text-gray-dark"
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

                    <PrimaryButton block as="submit" disabled={!acceptTerms}>
                        Sign Up
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
