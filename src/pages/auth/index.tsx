import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query'
import { useLocation, useHistory } from 'react-router-dom'
import {
  SignUpUserDataInterface,
  signUp,
  UserAuthType,
  login,
  LoginDataType,
} from '../../api/api'
import AuthForm, { AuthFormGroups } from '../../components/auth-forms'
import NavBar from '../../components/navbar'
import decodeToken from '../../helpers/local-storage/decode-token'

const AuthPage = (): React.ReactElement => {
  const { pathname } = useLocation()
  const history = useHistory()

  const [formGroup, setFormGroup] = useState<AuthFormGroups>('login')
  const [userGroup, setUserGroup] = useState<UserAuthType>('schools')
  const [userdata, setUserdata] = useState<SignUpUserDataInterface>({
    fullname: '',
    email: '',
    phone: 0,
    password: '',
    code: '',
    requestId: '',
    user: 'schools',
  })

  const [loginData, setLoginData] = useState<LoginDataType>({
    email: '',
    password: '',
    user: 'schools',
  })

  const [phone, setPhone] = useState<SignUpUserDataInterface['phone']>(0)
  const [requestid, setRequestId] = useState<
    SignUpUserDataInterface['requestId']
  >('')
  const [oldPassword, setOldPassword] = useState<
    SignUpUserDataInterface['password']
  >('')
  const [password, setPassword] = useState<SignUpUserDataInterface['password']>(
    ''
  )
  const [isMatch, setIsMatch] = useState<boolean>(true)

  const [phoneError, setPhoneError] = useState<string>('')

  useEffect(() => {
    switch (pathname) {
      case '/register':
        setFormGroup('signup')
        break
      case '/login':
        setFormGroup('login')
        break
      default:
        break
    }
  }, [pathname])

  useEffect(() => {
    setUserdata((prev) => {
      return {
        ...prev,
        user: userGroup,
      }
    })
    setLoginData((prev) => {
      return {
        ...prev,
        user: userGroup,
      }
    })
  }, [userGroup])

  const { mutate, isLoading, isError } = useMutation(signUp, {
    onSuccess: (data) => {
      sessionStorage.setItem('token', data.data.token)
      const { id, type } = decodeToken(data.data.token)
      history.push(`/profile/${type}/${id}`)
    },
  })

  const {
    mutate: mutateLogin,
    isLoading: isLoggingIn,
    isError: isLoginError,
  } = useMutation(login, {
    onSuccess: (data) => {
      sessionStorage.setItem('token', data.data.token)
      const { id, type, name } = decodeToken(data.data.token)
      sessionStorage.setItem('image', data.data[`${type}`].image)
      sessionStorage.setItem('name', name)
      history.push(`/profile/${type}/${id}`)
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target
    const { value } = e.target
    if (formGroup === 'signup') {
      if (name === 'code') {
        setPhoneError('')
      }

      setUserdata((prev) => {
        return {
          ...prev,
          [name]: value,
          phone,
          password,
          requestId: requestid,
          user: userGroup,
        }
      })
    }

    if (formGroup === 'login') {
      setLoginData((prev) => {
        return {
          ...prev,
          [name]: value,
          user: userGroup,
        }
      })
    }
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.currentTarget.value)
  }

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value
    const newNumber = `234${phoneNumber}`
    setPhone(Number(newNumber))
    setPhoneError('')
  }

  const comparePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmed = e.target.value
    if (confirmed === oldPassword) {
      setPassword(confirmed)
      setIsMatch(true)
    } else {
      setIsMatch(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    if (formGroup === 'signup') {
      if (isMatch) {
        mutate(userdata)
      }
      return
    }
    if (formGroup === 'login') {
      mutateLogin(loginData)
    }
  }

  const handleButton = (e: React.MouseEvent<HTMLDivElement>): void => {
    setUserGroup(e.currentTarget.id as UserAuthType)
  }

  return (
    <>
      <NavBar page="none" />
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        comparePasswords={comparePasswords}
        formGroup={formGroup}
        phone={Number(phone)}
        handleNumber={handleNumber}
        setId={setRequestId}
        userGroup={userGroup}
        handleButton={handleButton}
        isSignup={isLoading}
        isSignupError={isError}
        isMatch={isMatch}
        isLoggingIn={isLoggingIn}
        isLoginError={isLoginError}
        handlePassword={handlePassword}
        phoneError={phoneError}
        setPhoneError={setPhoneError}
      />
    </>
  )
}

export default AuthPage
