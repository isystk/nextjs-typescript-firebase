import React, { FC, createContext, useEffect, useState, ReactNode } from 'react'
import { User } from 'firebase'
import { getAuth } from '../utilities/firebase'

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

type Props = {
  children?: ReactNode
}

const AuthProvider: FC = ({ children }: Props) => {
  const [nowLoading, setNowLoading] = useState<boolean>(true)
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setNowLoading(false)
    })
  }, [])

  return nowLoading ? (
    <div>Loading...</div>
  ) : (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
