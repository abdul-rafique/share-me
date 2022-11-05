import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { TbEdit, TbMapPin } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import UserAvatar from '../../Components/UserAvatar'
import UserInfoMenu from '../../Components/UserInfoMenu'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { storageRef } from '../../../firebase.config'
import { uploadProfilePicture } from '../../features/user/user.slice'

function User() {
    const user = useSelector((state) => state.user.user)
    const { isUploading, isError, progress } = useSelector(
        (state) => state.user.uploadProfilePicture
    )
    const dispatch = useDispatch()
    // const [uploadProgress, setUploadProgress] = useState()
    // const [showProgress, setShowProgress] = useState(false)

    useEffect(() => {
        // console.log(user.uid)
    }, [])

    const changeAvatar = (e) => {
        const files = e.target.files

        // Array.from(files).map((file) => {
        //     const newFile = { blob: new File(file, file.name). }
        //     console.log(newFile)
        // })

        dispatch(uploadProfilePicture(e.target.files[0]))

        // Array.from(files).map((file) => URL.revokeObjectURL(file))
    }

    return (
        <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col w-full rounded-lg bg-white shadow shadow-gray-light">
                <div className="relative min-h-[4rem] max-h-56 flex items-center justify-center overflow-hidden rounded-t-lg">
                    <img
                        src={
                            false
                                ? 'https://picsum.photos/id/1002/800'
                                : 'http://placehold.jp/32/ddd/999/800x400.jpg?text=Cover%20Image'
                        }
                        alt="cover_image"
                        className="shrink-0 min-h-full min-w-full"
                    />

                    <label className="absolute bottom-5 right-5 appearance-none cursor-pointer">
                        <TbEdit size={28} className="text-accent-dark" />
                        <input type="file" className="hidden" />
                    </label>
                </div>

                <div className="relative">
                    <div className="absolute -bottom-20 flex items-end justify-start gap-5 p-5">
                        <div className="group relative rounded-full">
                            {!progress && (
                                <>
                                    <UserAvatar
                                        size={72}
                                        color="accent"
                                        padding={5}
                                    />
                                    <label className="absolute inset-0 flex items-stretch justify-center appearance-none cursor-pointer rounded-full overflow-hidden hover:bg-white">
                                        <span className="group-hover:flex flex-col items-center justify-center hidden text-sm">
                                            <TbEdit
                                                size={28}
                                                className="text-accent"
                                            />
                                        </span>
                                        <input
                                            type="file"
                                            name="changeAvatarInput"
                                            className="hidden"
                                            onChange={changeAvatar}
                                        />
                                    </label>
                                </>
                            )}
                            {progress !== undefined && (
                                <div className="w-28 bg-white rounded-full">
                                    <CircularProgressbar
                                        value={progress}
                                        text={`${progress}%`}
                                        strokeWidth={3}
                                        styles={buildStyles({
                                            pathColor: '#4464ad',
                                            trailColor: '#adb8f6',
                                            textColor: '#4464ad',
                                        })}
                                        // classes={{
                                        //     // path: 'stroke-accent',
                                        //     // trail: 'stroke-primary',
                                        //     // text: 'fill-accent',
                                        // }}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="">
                            <span className="block text-xl lg:text-2xl font-semibold text-black/80">
                                {user?.displayName
                                    ? user.displayName
                                    : 'No Name'}
                            </span>
                            <span className="flex items-center text-sm text-gray-dark">
                                <TbMapPin size={18} /> Karachi, Pakistan
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-hidden px-2.5 py-4 mt-16">
                    <hr className="mb-3 border-t-gray-light" />
                    <UserInfoMenu />
                </div>
            </div>

            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default User
