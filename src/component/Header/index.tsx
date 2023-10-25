'use client'
import { Binoculars, ChartLineUp, User } from 'phosphor-react'
import { HeaderContainer } from './styles'

interface HeaderProps {
  page: string
}

export function Header({ page }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>
        {page === '/' && (
          <>
            <ChartLineUp size={32} color="#50B2C0" /> Início
          </>
        )}
        {page === '/explore' && (
          <>
            <Binoculars size={32} color="#50B2C0" /> Explorar
          </>
        )}
        {page === '/profile' && (
          <>
            <User size={32} color="#50B2C0" /> Perfil
          </>
        )}
      </h1>
    </HeaderContainer>
  )
}
