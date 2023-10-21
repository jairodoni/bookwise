import { styled } from '../../../stitches.config'

export const LoginContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '0.8fr 1fr',
  placeItems: 'center',
  minHeight: '100vh',
  padding: '$5',
})

export const LoginSectionImage = styled('section', {
  width: '100%',
  height: '100%',

  background: `url(/images/bookwise-login-page.png) no-repeat center`,
  backgroundSize: 'cover',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$md',
})

export const WelcomeComponent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  maxWidth: 372,
  width: '100%',

  h1: {
    fontSize: '$lg',
    lineHeight: '$short',
  },

  span: {
    fontSize: '$md',
  },

  button: {
    width: '100%',
    height: '4.5rem',

    background: '$gray600',
    color: '$gray100',

    border: 'none',
    borderRadius: 8,
    padding: '$5 $6',
    marginTop: '$4',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    fontSize: '$lg',
    fontWeight: '$bold',

    img: {
      width: '$8',
      height: '$8',
      marginRight: '$5',
    },
  },
})
