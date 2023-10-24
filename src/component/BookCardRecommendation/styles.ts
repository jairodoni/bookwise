import { styled } from '../../../stitches.config'

export const BookCardRecommendationContainer = styled('div', {
  maxWidth: 324,
  maxHeight: 130,
  width: '100%',

  borderRadius: 8,
  background: '$gray700',
  padding: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '& + &': {
    marginTop: '$3',
  },

  img: {
    height: '5.875rem',
    width: '4rem',
    objectFit: 'contain',
    borderRadius: 4,
    marginRight: '$5',
  },
})

export const BookInfo = styled('div', {
  width: '100%',
  height: '5.875rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column',
  padding: '$1',

  h2: {
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
  },
})
