import { styled } from '../../../../stitches.config'

export const Buttons = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',

  '> a': {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '$3',
    textDecoration: 'none',
  },
})

export const Button = styled('button', {
  display: 'flex',
  justifyContent: 'center',

  background: 'transparent',
  color: '$gray400',
  border: 'none',

  svg: {
    marginRight: '$4',
  },

  '& + &': {
    marginTop: '$4',
  },

  '&:hover, &:focus': {
    color: '$gray100',
  },
})

export const FocusPage = styled('div', {
  opacity: '100%',
  background:
    'linear-gradient(205deg, rgba(127,209,204,1) 0%, rgba(150,148,245,1) 100%)',
  width: '4px',
  height: '1.5rem',
  marginRight: '10px',
  borderRadius: '$full',
})
