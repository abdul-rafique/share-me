import { async } from '@firebase/util'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import { auth } from '../../../firebase.config'

const initialState = {
    user: undefined,
    authenticated: undefined,
    login: {
        isLoading: false,
        isError: false,
    },
    signup: {
        isLoading: false,
        isError: false,
        isSuccessfull: false,
    },
    signout: {
        isLoading: false,
        isError: false,
    },
    resetpassword: {
        isLoading: false,
        isError: undefined,
    },
}

export const signup = createAsyncThunk('signup', async (req, thunkAPI) => {
    try {
        await createUserWithEmailAndPassword(
            auth,
            req.email,
            req.password
        ).then((data) => {
            data.user.displayName = req.name
            return null
        })
    } catch (error) {
        return thunkAPI.rejectWithValue({ ...error })
    }
})

export const login = createAsyncThunk('login', async (req, thunkAPI) => {
    try {
        if (!req.isLoggedIn) {
            return await signInWithEmailAndPassword(
                auth,
                req.email,
                req.password
            ).then(() => {})
        } else {
            return req
        }
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue({ ...error })
    }
})

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
    try {
        await signOut(auth)
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message })
    }
})

export const resetpassword = createAsyncThunk(
    'resetpassword',
    async (req, thunkAPI) => {
        try {
            await sendPasswordResetEmail(auth, req.email).then(() => {
                console.log('Password reset email sent!')
            })
        } catch (error) {
            return thunkAPI.rejectWithValue({ ...error })
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Sign Up
        builder.addCase(signup.fulfilled, (state) => {
            state.signup.isLoading = false
            state.signup.isSuccessfull = true
            state.signup.isError = initialState.signup.isError
        })
        builder.addCase(signup.pending, (state) => {
            state.signup.isLoading = true
        })
        builder.addCase(signup.rejected, (state, action) => {
            state.signup.isLoading = initialState.signup.isLoading
            state.signup.isSuccessfull = initialState.signup.isSuccessfull
            state.signup.isError = action.payload
        })
        // Sign In
        builder.addCase(login.fulfilled, (state, action) => {
            state.login.isLoading = initialState.login.isLoading
            state.login.isError = initialState.login.isError
            state.authenticated = true
            state.user = action.payload
        })
        builder.addCase(login.pending, (state) => {
            state.login.isLoading = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.login.isLoading = initialState.login.isLoading
            state.isError = action.payload
        })
        // Sign Out
        builder.addCase(logout.fulfilled, (state) => {
            state.user = initialState.user
            state.authenticated = false
            state.signout.isLoading = initialState.signout.isLoading
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.signout.isLoading = initialState.signout.isLoading
            state.signout.isError = action.payload
        })
        // Reset Password
        builder.addCase(resetpassword.fulfilled, (state) => {
            state.resetpassword.isLoading = initialState.resetpassword.isLoading
        })

        builder.addCase(resetpassword.pending, (state) => {
            state.resetpassword.isLoading = true
        })

        builder.addCase(resetpassword.rejected, (state, action) => {
            state.resetpassword.isLoading = initialState.resetpassword.isLoading
            state.resetpassword.isError = action.payload
        })
    },
})
