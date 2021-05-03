/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { getToken } from '../helpers/local-storage/decode-token'

const APP = axios.create({
  baseURL: 'https://felt-teacher.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

const token = getToken()
if (token) {
  APP.defaults.headers.common.Authorization = `Bearer ${token}`
}

export type SignUpNameType = 'fullname' | 'nameOfSchool' | 'nameOfParent'

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

export type UserAuthType = 'teachers' | 'parents' | 'schools'

export type LoginDataType = Pick<
  SignUpUserDataInterface,
  'email' | 'password' | 'user'
>

export const signUp = async (userData: SignUpUserDataInterface) => {
  const { data } = await APP.post(`/${userData.user}`, userData)
  return data
}

export const getCode = async (phone: SignUpCodeDataType) => {
  const { data } = await APP.post(`/sendcode`, phone)
  return data
}

export const login = async (userData: LoginDataType) => {
  if (userData.user === 'parents') {
    const { data } = await APP.post(`/login/parent`, userData)
    return data
  }
  if (userData.user === 'schools') {
    const { data } = await APP.post(`/login/school`, userData)
    return data
  }

  const { data } = await APP.post(`/login`, userData)
  return data
}

export const getTeachers = async (subject: string) => {
  const { data } = await APP.get(`/teachers/${subject}`)
  return data
}

export const getMyProfile = async (type: string, id: string) => {
  const { data } = await APP.get(`/${type}s/${id}`)
  if (type === 'teacher') {
    return data.user
  }
  return data
}
