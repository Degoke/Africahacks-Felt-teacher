/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios'

type UserAuthType = 'teachers' | 'parents' | 'schools'

const API = axios.create({
  baseURL: 'https://felt-teacher.herokuapp.com/api',
})

export const signUp = async (user: UserAuthType): Promise<AxiosResponse> => {
  const { data } = await API.get(`/${user}`)
  return data
}
