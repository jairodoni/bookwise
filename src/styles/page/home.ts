import { styled } from '../../../stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> main': {
    display: 'grid',
    gridTemplateColumns: '1fr 0.5fr',
    gridColumnGap: '4rem',

    '> div:first-child': {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',

      marginBottom: '1rem',

      '> span': {
        marginBottom: '$4',
      },
    },

    '> div:last-child > div': {
      maxWidth: 324,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      marginBottom: '$4',
    },

    '@media (min-width: 3000px)': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
})
