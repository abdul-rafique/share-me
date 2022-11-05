import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { auth } from '../../firebase.config'
import { sendPasswordResetEmail } from 'firebase/auth'

import FormField from '../Components/Form/FormField'
import PrimaryButton from '../Components/PrimaryButton'
import { ClipLoader } from 'react-spinners'
import Alert from '../Components/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { resetpasswordSelector } from '../features/auth/auth.selector'
import { resetpassword } from '../features/auth/auth.slice'

function ForgotPass() {
    // const [isLoading, setIsLoading] = useState(false)
    const { isLoading } = useSelector(resetpasswordSelector)
    const dispatch = useDispatch()

    const [forgotPassErr, setForgotPassErr] = useState()
    const [forgotPassSuccess, setForgotPassSuccess] = useState()
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(
            yup.object({
                email: yup.string().email().required('Required'),
            })
        ),
    })

    const onSubmit = (data) => {
        dispatch(resetpassword(data))

        // setIsLoading(true)
        // sendPasswordResetEmail(auth, data.email)
        //     .then(() => {
        //         setIsLoading(false)
        //         setForgotPassSuccess(data.email)
        //     })
        //     .catch((err) => {
        //         setIsLoading(false)
        //         console.log(err.code)
        //         console.log(err.message)
        //         switch (err.code) {
        //             case 'auth/user-not-found':
        //                 setForgotPassErr('Sorry! user not found.')
        //                 break
        //             case 'auth/network-request-failed':
        //                 setForgotPassErr(
        //                     'Network connection failed. Please! Check your internet connection.'
        //                 )
        //                 break
        //             default:
        //                 setForgotPassErr('Something went wrong.')
        //                 break
        //         }
        //     })
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
                <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
                    Forgot Password
                </h2>
                {forgotPassErr && <Alert type="danger">{forgotPassErr}</Alert>}
                {forgotPassSuccess && (
                    <Alert type="success">
                        We have sent a password reset email to{' '}
                        <b>{forgotPassSuccess}</b>
                    </Alert>
                )}
                <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <FormField
                            label="Email"
                            type="email"
                            register={register('email')}
                            error={errors.email}
                        />
                    </div>

                    <PrimaryButton
                        as="submit"
                        block
                        disabled={!isDirty || !isValid}
                    >
                        {isLoading ? (
                            <ClipLoader size={25} color="#fff" />
                        ) : (
                            'Send me link'
                        )}
                    </PrimaryButton>
                </form>
                <hr className="my-3 border-t-gray-light" />

                <p className="text-gray text-center">
                    Know your password?{' '}
                    <Link
                        to="/login"
                        className="font-semibold text-accent-light hover:text-accent-dark transition-colors"
                    >
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ForgotPass
