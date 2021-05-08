/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Redirect } from 'react-router-dom'
import decodeToken, { getToken } from '../local-storage/decode-token'

const withAuth = (Component: React.FC) => {
  const AuthRoute = () => {
    const token = getToken()

    if (token) {
      const { exp } = decodeToken(token)
      const isAuth = Number(exp) < Date.now()
      if (isAuth) {
        return <Component />
      }
    }
    return <Redirect to="/" />
  }

  return AuthRoute
}

export default withAuth
