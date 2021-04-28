/* eslint-disable import/prefer-default-export */
import { AxiosResponse } from 'axios'
import { useAxios } from '../hooks/axios'

const axios = useAxios()

type SignUpNameType = 'fullname' | 'nameOfSchool' | 'nameOfParent'

type SignUpNameGroupType = {
  [key in SignUpNameType]: string
}

export interface SignUpUserDataInterface extends SignUpNameGroupType {
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
  const { data } = await axios.post(`/${userData.user}`, userData)
  return data
}

export const getCode = async (
  phone: SignUpCodeDataType
): Promise<AxiosResponse> => {
  const { data } = await axios.post(`/sendcode`, phone)
  return data
}
