import { nunito } from '@/app/layout'
import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: nunito.style.fontFamily,
    lineHeight: 'base',
  },
  body: {
    background: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    color: 'inherit',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: '$regular',
  },
  button: {
    cursor: 'pointer',
  },
})
