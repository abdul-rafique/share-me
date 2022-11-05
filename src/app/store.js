import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../features/auth/auth.slice'
import userReducer from '../features/user/user.slice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
