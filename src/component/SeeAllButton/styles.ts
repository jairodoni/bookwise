import Link from 'next/link'
import { styled } from '../../../stitches.config'

export const SeeAllContainer = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  textDecoration: 'none',
  fontWeight: '$bold',
  fontSize: '0.875rem',

  color: '$purple100',

  span: {
    marginRight: '$2',
  },
})
