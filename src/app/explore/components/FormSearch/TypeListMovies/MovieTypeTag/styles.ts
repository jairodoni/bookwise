import { styled } from '../../../../../../../stitches.config'

export const MovieTypeTagContainer = styled('div', {
  width: 'fit-content',
  borderRadius: '$full',
  textTransform: 'capitalize',
  paddingInline: 16,

  variants: {
    type: {
      outline: {
        border: '1px solid $purple100',
        color: '$purple100',
      },
      fill: {
        background: '$purple100',
        color: '$gray100',
      },
    },
  },
})
