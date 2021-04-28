/* eslint-disable no-param-reassign */
import React, { createContext, useMemo } from 'react'
import Axios, { AxiosInstance } from 'axios'

export const AxiosContext = createContext<AxiosInstance>(Axios)

export default function AxiosProvider({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element {
  const myAxios = useMemo(() => {
    const axios = Axios.create({
      baseURL: 'https://felt-teacher.herokuapp.com/api',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    return axios
  }, [])

  return (
    <AxiosContext.Provider value={myAxios}>{children}</AxiosContext.Provider>
  )
}
