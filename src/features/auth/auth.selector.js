import { createSelector } from '@reduxjs/toolkit'

export const authSelector = (state) => state.auth

export const userSelector = createSelector(authSelector, (auth) => {
    return auth.user
})
export const authenticationSelector = createSelector(authSelector, (auth) => {
    return auth.authenticated
})

export const loginSelector = createSelector(authSelector, (auth) => {
    return auth.login
})

export const signupSelector = createSelector(authSelector, (auth) => {
    return auth.signup
})

export const resetpasswordSelector = createSelector(authSelector, (auth) => {
    return auth.resetpassword
})
