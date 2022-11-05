import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { storageRef } from '../../../firebase.config'

const uploadProgress = createAsyncThunk('uploadProgress', (progress) => {
    return progress
})

export const uploadProfilePicture = createAsyncThunk(
    'uploadProfilePicture',
    (file, thunkAPI) => {
        try {
            console.log(file)
            // const newAvatar = Array.from(req).map((file) => {
            //     const dispatch = useDispatch()
            //     const blobFile = {
            //         ...file,
            //         url: URL.createObjectURL(file),
            // }

            const type = file.name.split('.')[1]
            const newFile = `profilePicture.${type}`

            // console.log(fileNameNoExt)

            if (file.type === 'image/jpeg') {
                // setShowProgress(true)

                const pathRef = ref(storageRef, user.uid)

                const avatarRef = ref(pathRef, `${newFile}`)

                const uploadTask = uploadBytesResumable(avatarRef, file)

                uploadTask.on('state_changed', (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    )

                    console.log('Progress: ', progress, '%')

                    // dispatch({
                    //     type: 'uploadProgress',
                    //     progress,
                    // })

                    // setUploadProgress(progress)
                })

                uploadTask.then(() => {
                    // setShowProgress(false)
                    // return null
                })

                uploadTask.catch((error) => {
                    // setShowProgress(false)
                    console.log(error)
                })

                // Array.from(file).map((file) => URL.revokeObjectURL(file))
            }
            // })
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue({ ...error })
        }
    }
)

const initialState = {
    user: undefined,
    uploadProfilePicture: {
        isUploading: undefined,
        isError: undefined,
        progress: undefined,
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(uploadProfilePicture.fulfilled, (state) => {
            state.uploadProfilePicture.isUploading =
                initialState.uploadProfilePicture.isUploading
            state.uploadProfilePicture.isError =
                initialState.uploadProfilePicture.isError
        })

        builder.addCase(uploadProfilePicture.pending, (state) => {
            state.uploadProfilePicture.isUploading = true
        })

        builder.addCase(uploadProfilePicture.rejected, (state, action) => {
            state.uploadProfilePicture.isUploading =
                initialState.uploadProfilePicture.isUploading
            state.uploadProfilePicture.isError = action.payload
        })
    },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
