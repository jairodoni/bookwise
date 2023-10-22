'use client'
import { SignIn, SignOut, User } from 'phosphor-react'
import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
  LoginButton,
  LogoutButton,
  Profile,
  UserLogged,
} from './styles'
import { ComponentProps, useState } from 'react'

// eslint-disable-next-line
export interface AvatarProps extends ComponentProps<typeof AvatarImage> { }

export function ProfileComponent(props: AvatarProps) {
  // linha de baixo, mock de teste...
  const [userStatusLogin, setUserStatusLogin] = useState(true)

  return (
    <Profile>
      {userStatusLogin ? (
        <LoginButton>
          Fazer login <SignIn />
        </LoginButton>
      ) : (
        <UserLogged>
          <AvatarContainer>
            <AvatarImage {...props} />

            <AvatarFallback delayMs={600}>
              <User />
            </AvatarFallback>
          </AvatarContainer>
          <span>Jairo Doni</span>
          <LogoutButton>
            <SignOut />
          </LogoutButton>
        </UserLogged>
      )}
    </Profile>
  )
}
