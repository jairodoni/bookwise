import { styled } from '../../../stitches.config'

export const HeaderContainer = styled('header', {
  width: '100vw',
  marginBottom: '2.5rem',

  '> h1': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    fontSize: '$2xl',
    lineHeight: '$short',
    fontWeight: '$bold',

    svg: {
      marginRight: '$5',
    },
  },
})
