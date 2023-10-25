import { styled } from '../../../stitches.config'
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  marginRight: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'var(--size-container)',
  height: 'var(--size-container)',
  overflow: 'hidden',
  background:
    'linear-gradient(205deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',
})

export const AvatarImage = styled(Avatar.Image, {
  width: 'var(--size-image)',
  height: 'var(--size-image)',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: 'var(--size-container)',
  height: 'var(--size-container)',

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
