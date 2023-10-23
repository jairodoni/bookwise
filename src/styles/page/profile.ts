import { styled } from '../../../stitches.config'

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> header > h1': {
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

  main: {
    margin: '2.5rem 0 1rem',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})
