import { User } from 'firebase'
import { FC, createContext, useEffect, useState } from 'react'
import { getAuth } from '../utilities/firebase'

type AuthContextProps = {
    currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(
        undefined
    )

    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }