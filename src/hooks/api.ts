/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { useMutation } from 'react-query'
import { getCode, signUp } from '../api/api'

export const useSignup = () => {
  return useMutation(signUp, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  })
}

export const useGetCode = () => {
  return useMutation(getCode, {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  })
}
