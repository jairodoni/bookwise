import { styled } from '../../../stitches.config'

export const SidebarContainer = styled('aside', {
  width: '14.5rem',
  height: 'calc(100% - 40px)',
  margin: 20,
  borderRadius: '12px',

  zIndex: 0,
  position: 'absolute',
  left: 0,
  top: 0,

  backgroundImage:
    'linear-gradient(205deg, rgba(14,17,22,1) 35%, rgba(21,20,65,0.4) 50%, rgba(14,17,22,1) 70%, rgba(19,51,59,0.8) 100%)',
})

export const GradientDiv = styled('div', {
  height: '16rem',
  width: '14.5rem',

  zIndex: 1,
  position: 'absolute',
  left: 0,
  top: 0,

  backgroundColor: '$green200',
  background:
    'linear-gradient(180deg, rgba(19,51,59,1) 0%, rgba(21,20,65,1) 50%, rgba(0,0,0, 0) 100%)',
  borderRadius: '12px 12px 0 0',
})

export const LogoBackground = styled('div', {
  height: '8rem',
  width: '14.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  zIndex: 4,
  left: 0,
  top: 0,
})

export const ButtonsList = styled('div', {
  height: 'calc(100% - 12rem)',
  marginTop: '10rem',
  position: 'relative',
  zIndex: 4,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
})
