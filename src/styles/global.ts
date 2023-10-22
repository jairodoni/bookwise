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
    lineHeight: '$base',
  },
  body: {
    background: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimiseLegibility',
  },

  a: {
    color: 'inherit',
  },

  'body, input, textarea, button': {
    fontFamily: nunito.style.fontFamily,
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
  button: {
    cursor: 'pointer',
  },
})
