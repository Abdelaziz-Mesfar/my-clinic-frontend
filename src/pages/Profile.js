import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const userInfo = useSelector(state => state.user.info)
  return (
    <div>
      <h1> {userInfo.firstName} </h1>
      <h1> {userInfo.lastName} </h1>
      <h1> {userInfo.email} </h1>
    </div>
  )
}

export default Profile