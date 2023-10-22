'use client'
import { usePathname } from 'next/navigation'

import { Binoculars, ChartLineUp, User } from 'phosphor-react'
import { Button, Buttons, FocusPage } from './styles'
import Link from 'next/link'

export function ButtonsMenu() {
  const pathname = usePathname()

  return (
    <Buttons>
      <Link href="/">
        {pathname === '/' ? (
          <FocusPage />
        ) : (
          <div
            style={{ width: '4px', height: '1.5rem', marginRight: '10px' }}
          />
        )}
        <Button
          css={pathname === '/' ? { fontWeight: 'bold', color: '#F8F9FC' } : {}}
        >
          <ChartLineUp size={24} />
          Início
        </Button>
      </Link>
      <Link href="/explore">
        {pathname === '/explore' ? (
          <FocusPage />
        ) : (
          <div
            style={{ width: '4px', height: '1.5rem', marginRight: '10px' }}
          />
        )}
        <Button
          css={
            pathname === '/explore'
              ? { fontWeight: 'bold', color: '#F8F9FC' }
              : {}
          }
        >
          <Binoculars size={24} />
          Explorar
        </Button>
      </Link>
      <Link href="/profile">
        {pathname === '/profile' ? (
          <FocusPage />
        ) : (
          <div
            style={{ width: '4px', height: '1.5rem', marginRight: '10px' }}
          />
        )}
        <Button
          css={
            pathname === '/profile'
              ? { fontWeight: 'bold', color: '#F8F9FC' }
              : {}
          }
        >
          <User size={24} />
          Perfil
        </Button>
      </Link>
    </Buttons>
  )
}
