import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { IoCaretDown } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { logout } from '../features/user/userSlice'
import { auth } from '../../firebase.config'

import UserAvatar from './UserAvatar'

function UserMenu() {
    const dispatch = useDispatch()
    const menuItems = [
        { itemName: 'Profile', url: 'user' },
        { itemName: 'Settings', url: '/user/settings' },
    ]

    const onLogout = () => {
        auth.signOut()

        if (auth.currentUser) {
            dispatch(logout())
        }
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className={`rounded-md px-3 py-1.5 w-full flex items-center gap-2`}
                >
                    <UserAvatar color="accent" size={28} padding={1} />
                    <IoCaretDown size={20} className="text-accent" />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration 100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-1 min-w-[8rem] origin-top-right bg-white rounded-md shadow-md ring-1 ring-gray/30">
                    <div className="p-1">
                        {menuItems.map((item, index) => (
                            <Menu.Item
                                key={`${item.itemName.trim().toLowerCase()}${
                                    index + 1
                                }`}
                            >
                                {({ active }) => (
                                    <Link
                                        to={item.url}
                                        className={`${
                                            active
                                                ? 'bg-primary-light/50 text-accent'
                                                : 'text-gray'
                                        } group flex w-full items-center rounded-md p-2 text-sm font-semibold`}
                                    >
                                        {item.itemName}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    as="button"
                                    className={`${
                                        active
                                            ? 'bg-primary-light/50 text-accent'
                                            : 'text-gray'
                                    } flex w-full items-center rounded-md p-2 text-sm font-semibold`}
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default UserMenu
