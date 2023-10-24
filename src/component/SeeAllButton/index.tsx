'use client'
import { SeeAllContainer } from './styles'
import { CaretRight } from 'phosphor-react'

interface SeeAllButtonProps {
  path: string
}

export function SeeAllButton({ path }: SeeAllButtonProps) {
  return (
    <SeeAllContainer href={path}>
      <span>Ver todos</span>
      <CaretRight />
    </SeeAllContainer>
  )
}
