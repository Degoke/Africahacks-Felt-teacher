/* eslint-disable import/prefer-default-export */
import { AxiosInstance } from 'axios'
import { useContext } from 'react'
import { AxiosContext } from '../context/axios'

export const useAxios = (): AxiosInstance => {
  return useContext(AxiosContext)
}
