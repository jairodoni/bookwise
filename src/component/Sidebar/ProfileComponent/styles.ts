import { styled } from '../../../../stitches.config'

export const Profile = styled('div', {
  height: '3rem',
  width: '18.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginButton = styled('button', {
  height: '$5',
  width: '$5',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'transparent',
  border: 'none',
  color: '$gray200',
  fontWeight: '$bold',

  svg: {
    marginLeft: '$3',
    height: '1.25rem',
    width: '1.25rem',
    color: '$green100',
  },
})

export const UserLogged = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LogoutButton = styled('button', {
  display: 'flex',
  alignItems: 'center',

  background: 'transparent',
  border: 'none',

  svg: {
    marginLeft: '$3',
    height: '1.25rem',
    width: '1.25rem',
    color: '#F75A68',
  },
})
