import { styled } from '../../../stitches.config'

export const StarsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  svg: {
    color: '$purple100',
    boxSizing: 'content-box',

    '&:first-child': {
      paddingLeft: 0,
    },
  },

  variants: {
    size: {
      sm: {
        svg: {
          padding: '0 2px',
          width: 16,
          height: 16,
        },
      },
      md: {
        svg: {
          padding: '0 3px',
          width: 20,
          height: 20,
        },
      },
      lg: {
        svg: {
          padding: '0 2px',
          width: 24,
          height: 24,
        },
      },
    },
  },
})
