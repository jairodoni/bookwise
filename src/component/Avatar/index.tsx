'use client'
import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

// eslint-disable-next-line
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  sizeContainer: string
  sizeImage: string
}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer css={{ '--size-container': props.sizeContainer }}>
      <AvatarImage {...props} css={{ '--size-image': props.sizeImage }} />

      <AvatarFallback
        delayMs={600}
        css={{ '--size-container': props.sizeContainer }}
      >
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
