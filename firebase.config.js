// import dotenv from "dotenv";
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'

// dotenv.config();

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore()

// Storage
export const storage = getStorage(app)

export const storageRef = ref(storage, 'users')
