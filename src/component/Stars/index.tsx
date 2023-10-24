'use client'
import { ComponentProps } from 'react'
import { StarsContainer } from './styles'
import { Star } from 'phosphor-react'

interface RatingStarsProps extends ComponentProps<typeof StarsContainer> {
  rating: number
  size?: 'sm' | 'md' | 'lg'
}

export function Stars({ rating, size = 'sm', ...props }: RatingStarsProps) {
  return (
    <StarsContainer size={size} {...props}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={`star-${i}`} weight={i + 1 <= rating ? 'fill' : 'regular'} />
      ))}
    </StarsContainer>
  )
}
