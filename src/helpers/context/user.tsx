/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useState, useEffect } from 'react'
import decodeToken, { getToken } from '../local-storage/decode-token'

export type UserContextType = {
  id: string
  type: string
}

export type UserContextProviderType = {
  children: React.ReactNode
}

type UserContextProviderValue = {
  userId: string
  userType: string
}

export const UserContext = createContext<UserContextProviderValue>({
  userId: '',
  userType: '',
})

const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [userId, setUserId] = useState<UserContextType['id']>('')
  const [userType, setUserType] = useState<UserContextType['type']>('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = getToken()
    if (token) {
      const { id, type } = decodeToken(token)
      setUserId(id)
      setUserType(type)
      return
    }
    setUserId('')
    setUserType('')
  })

  const value: UserContextProviderValue = {
    userId,
    userType,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider
