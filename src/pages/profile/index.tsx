import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Redirect, useParams } from 'react-router-dom'
import { getMyProfile } from '../../api/api'
import NavBar from '../../components/navbar'
import Profiles from '../../components/profiles'
import withAuth from '../../helpers/auth/with-auth'
import decodeToken, { getToken } from '../../helpers/local-storage/decode-token'

type ParamsType = {
  type: string
  id: string
}

type ProfileCategoryType = 'private' | 'public'

const Profile = (): React.ReactElement => {
  const { type, id } = useParams<ParamsType>()

  const [category, setCategory] = useState<ProfileCategoryType>('public')

  useEffect(() => {
    const token = getToken()
    if (token) {
      const { id: userId } = decodeToken(token)
      if (id === userId) {
        setCategory('private')
        return
      }
    }
    setCategory('public')
  }, [id])

  const { data: profile, isLoading, isError, isSuccess } = useQuery(
    ['profile', id],
    () => getMyProfile(type, id),
    {
      onSuccess: (data) => console.log(data),
    }
  )

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {isError && <Redirect to="/" />}
      {isSuccess && (
        <>
          <NavBar page="profile" />
          <Profiles profile={profile} type={type} category={category} />
        </>
      )}
    </div>
  )
}

export default withAuth(Profile)
