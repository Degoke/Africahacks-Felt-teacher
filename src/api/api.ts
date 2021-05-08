/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import decodeToken, { getToken } from '../helpers/local-storage/decode-token'

const APP = axios.create({
  baseURL: 'https://felt-teacher.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// eslint-disable-next-line consistent-return
const setHeader = () => {
  const token = getToken()
  if (token) {
    APP.defaults.headers.common.Authorization = `Bearer ${token}`
    const { id } = decodeToken(token)
    return id
  }
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

export interface UpdateUserDataInterface
  extends Partial<
    Omit<SignUpUserDataInterface, 'code' | 'requestId' | 'user'>
  > {
  state: string
  yearOfExperience: string
  subject: string | string[]
  id: string
  type: string
}

export type SignUpCodeDataType = Pick<SignUpUserDataInterface, 'phone'>

export type UserAuthType = 'teachers' | 'parents' | 'schools'

export type LoginDataType = Pick<
  SignUpUserDataInterface,
  'email' | 'password' | 'user'
>

export type ResumeType = {
  resume: File
}

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
  setHeader()
  const { data } = await APP.get(`/teachers/${subject}`)
  return data
}

export const getMyProfile = async (type: string, id: string) => {
  setHeader()
  const { data } = await APP.get(`/${type}s/${id}`)
  if (type === 'teacher') {
    return data.user
  }
  return data
}

export const updateProfile = async (
  userData: Partial<UpdateUserDataInterface>
) => {
  setHeader()
  const { id } = userData
  const { type } = userData
  delete userData.id
  delete userData.type
  const { data } = await APP.put(`/${type}s/${id}`, userData)
  return data
}

export const updateResume = async (resume: ResumeType) => {
  const id = setHeader()
  const { data } = await APP.put(`/teachers/${id}/resume`, resume)
  return data
}

export const getSchoolJobs = async () => {
  setHeader()
  const { data } = await APP.get('/job')
  return data
}

export const getParentJobs = async () => {
  setHeader()
  const { data } = await APP.get('/jobParent')
  return data
}
