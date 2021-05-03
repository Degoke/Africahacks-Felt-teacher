/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Redirect } from 'react-router-dom'
import decodeToken, { getToken } from '../local-storage/decode-token'

const withAuth = (Component: React.FC) => {
  const AuthRoute = () => {
    const token = getToken()

    if (token) {
      const { exp, iat } = decodeToken(token)
      const isAuth = new Date(exp) < new Date(Date.now())
      console.log(isAuth)
      console.log(new Date(exp))
      console.log(new Date(iat))
      console.log(new Date(Date.now()))

      if (isAuth) {
        return <Component />
      }
    }
    return <Redirect to="/" />
  }

  return AuthRoute
}

export default withAuth
