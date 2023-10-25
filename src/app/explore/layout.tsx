import { ExploreContainer } from '@/styles/page/explore'
import { Header } from '@/component/Header'
import { ReactNode } from 'react'
import { FormSearch } from './components/FormSearch'
import { SearchInput } from './components/FormSearch/SearchInput'
import { TagListMovies } from './components/FormSearch/TypeListMovies'

interface ExploreLayoutProps {
  children: ReactNode
}

export default function ExploreLayout({ children }: ExploreLayoutProps) {
  return <ExploreContainer>{children}</ExploreContainer>
}
