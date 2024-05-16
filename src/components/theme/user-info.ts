import React from 'react'

interface UserInfoProps {
  displayName: string
}

const UserInfo = ({ displayName }: UserInfoProps): string => {
  return displayName
}

export default UserInfo
