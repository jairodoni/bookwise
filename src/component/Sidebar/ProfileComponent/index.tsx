'use client'
import { SignIn, SignOut } from 'phosphor-react'
import { LoginButton, LogoutButton, Profile, UserLogged } from './styles'
import { useState } from 'react'
import { Avatar } from '@/component/Avatar'

export function ProfileComponent() {
  // linha de baixo, mock de teste...
  const [userStatusLogin, setUserStatusLogin] = useState(true)

  return (
    <Profile>
      {!userStatusLogin ? (
        <LoginButton>
          Fazer login <SignIn />
        </LoginButton>
      ) : (
        <UserLogged>
          <Avatar
            sizeContainer="2rem"
            sizeImage="1.75rem"
            src="https://github.com/jairodoni.png"
          />
          <span>Jairo Doni</span>
          <LogoutButton>
            <SignOut />
          </LogoutButton>
        </UserLogged>
      )}
    </Profile>
  )
}
