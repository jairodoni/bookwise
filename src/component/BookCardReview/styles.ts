import { styled } from '../../../stitches.config'

export const BookCardReviewContainer = styled('div', {
  maxWidth: 1200,
  width: '100%',
  borderRadius: 8,
  background: '$gray700',
  padding: '$6',

  display: 'flex',
  alignItems: 'space-between',
  flexDirection: 'column',

  '&+&': {
    marginTop: '$3',
  },
})

export const HeaderCard = styled('div', {
  width: '100%',
  display: 'inline-flex',
  marginBottom: '$8',

  div: {
    display: 'inline-flex',
  },
})

export const Perfil = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',

  '> div:first-child > div': {
    display: 'flex',
    flexDirection: 'column',

    'span:last-child': {
      color: '$gray400',
    },
  },

  '> div:last-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const BookReview = styled('div', {
  display: 'inline-flex',

  img: {
    width: 152,
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '$sm',
    marginRight: '$5',
  },

  h2: {
    fontSize: '$md',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray400',
  },

  p: {
    marginTop: '$5',
    fontSize: '0.875rem',
    color: '$gray300',
  },
})
