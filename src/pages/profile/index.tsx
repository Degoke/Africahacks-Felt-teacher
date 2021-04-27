import React from 'react'
import NavBar from '../../components/navbar'
import Profiles from '../../components/profiles'

const Profile = (): React.ReactElement => {
  return (
    <div>
      <NavBar page="profile" />
      <Profiles />
    </div>
  )
}

export default Profile
