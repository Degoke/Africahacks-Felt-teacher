import jwt_decode from 'jwt-decode'

export type DecodedTokenType = {
  _id: string
  iat: string
  exp: string
  name: string
  type: string
  id: string
}

export const getToken = (): string | null => {
  return sessionStorage.getItem('token')
}

export const getImage = (): string | null => {
  const image = sessionStorage.getItem('image')
  if (image === 'Please Update') {
    return null
  }
  return image
}

const decodeToken = (token: string): Omit<DecodedTokenType, '_id'> => {
  const { _id: id, name, type, exp, iat } = jwt_decode<
    Omit<DecodedTokenType, 'id'>
  >(token)
  return { id, name, type, exp, iat }
}

export default decodeToken
