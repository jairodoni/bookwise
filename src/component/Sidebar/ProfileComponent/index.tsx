'use client'
import { SignIn, SignOut } from 'phosphor-react'
import { LoginButton, LogoutButton, Profile, UserLogged } from './styles'
import { useState } from 'react'
import { Avatar } from '@/component/Avatar'

export function ProfileComponent() {
  // linha de baixo, mock de teste...
  const [userStatusLogin, setUserStatusLogin] = useState(false)

  return (
    <Profile>
      {!userStatusLogin ? (
        <LoginButton>
          Fazer login <SignIn />
        </LoginButton>
      ) : (
        <UserLogged>
          <Avatar />
          <span>Jairo Doni</span>
          <LogoutButton>
            <SignOut />
          </LogoutButton>
        </UserLogged>
      )}
    </Profile>
  )
}
