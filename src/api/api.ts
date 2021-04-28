/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios'

const APP = axios.create({
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

type SignUpNameType = 'fullname' | 'nameOfSchool' | 'nameOfParent'

type SignUpNameGroupType = {
  [key in SignUpNameType]: string
}

export interface SignUpUserDataInterface extends Partial<SignUpNameGroupType> {
  email: string
  password: string
  phone: number
  code: string
  requestId: string
  user: UserAuthType
}

export type SignUpCodeDataType = Pick<SignUpUserDataInterface, 'phone'>

type UserAuthType = 'teachers' | 'parents' | 'schools'

export const signUp = async (
  userData: SignUpUserDataInterface
): Promise<AxiosResponse> => {
  const { data } = await APP.post(`/${userData.user}`, userData)
  return data
}

export const getCode = async (
  phone: SignUpCodeDataType
): Promise<AxiosResponse> => {
  const { data } = await APP.post(`/sendcode`, phone)
  return data
}
