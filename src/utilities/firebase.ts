import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/functions'

const isEmulator = () => {
  const useEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR
  return !!(useEmulator && useEmulator === 'true')
}

const config = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_DOMAIN,
  databeseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
}

export const getApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)

    if (isEmulator()) {
      firebase.firestore().useEmulator('localhost', 8080)
      firebase.functions().useEmulator('localhost', 5001)
      firebase.auth().useEmulator('http://localhost:9099')
    }
  } else {
    firebase.app()
  }

  return firebase
}

export const getFirestore = () => {
  return getApp().firestore()
}

export const getFunctions = () => {
  const region = isEmulator() ? undefined : 'asia-northeast1'
  return getApp().functions(region)
}

export const getAuth = () => {
  return getApp().auth()
}
