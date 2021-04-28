import React, { useState } from 'react'
import { SignUpUserDataInterface } from '../../api/api'
import AuthForm from '../../components/auth-forms'
import NavBar from '../../components/navbar'

const AuthPage = (): React.ReactElement => {
  const [data, setData] = useState<SignUpUserDataInterface>({
    fullname: '',
    email: '',
    phone: 0,
    password: '',
    code: '',
    requestId: '',
    user: 'schools',
  })

  const [phone, setPhone] = useState<string>('')
  const [requestid, setRequestId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target
    const { value } = e.target
    console.log(value)
    if (name === 'code') {
      setData((prev) => {
        return {
          ...prev,
          [name]: value,
          phone: Number(phone),
          password,
          requestId: requestid,
          user: 'schools',
        }
      })
      return
    }
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
        phone: Number(phone),
        password,
        requestId: requestid,
        user: 'schools',
      }
    })
  }

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneNumber = e.target.value
    console.log(phoneNumber)
    const newNumber = `234${phoneNumber}`
    setPhone(newNumber)
  }

  const comparePasswords = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmed = e.target.value
    if (confirmed === data.password) {
      setPassword(confirmed)
    } else {
      setPassword('')
    }
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
  }

  return (
    <>
      <NavBar page="none" />
      <AuthForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        comparePasswords={comparePasswords}
        formGroup="signup"
        phone={Number(phone)}
        handleNumber={handleNumber}
        setId={setRequestId}
      />
    </>
  )
}

export default AuthPage
