import { styled } from '../../../../stitches.config'
import * as Avatar from '@radix-ui/react-avatar'

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

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  marginRight: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2rem',
  height: '2rem',
  overflow: 'hidden',
  background:
    'linear-gradient(205deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '1.75rem',
  height: '1.75rem',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '2rem',
  height: '2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  background:
    'linear-gradient(205deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',

  svg: {
    color: '$white',
    width: '1.25rem',
    height: '1.25rem',
  },
})
