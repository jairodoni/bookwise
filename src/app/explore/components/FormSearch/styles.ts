import { styled } from '../../../../../stitches.config'

export const FormSearchComponent = styled('form', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',

  '> div:last-child': {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',

    position: 'relative',
    gridColumn: '-3 / -1',
  },
})
