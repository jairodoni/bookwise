'use client'
import { FormSearchComponent } from './styles'
import { Header } from '@/component/Header'
import { SearchInput } from './SearchInput'
import { TagListMovies } from './TypeListMovies'

const mockTypeMovies = [
  { tag: 'Todos', type: 'fill' },
  { tag: 'Horror', type: 'outline' },
  { tag: 'Comedia', type: 'outline' },
]

export function FormSearch() {
  return (
    <FormSearchComponent>
      <Header page="/explore" />
      <SearchInput />
      <TagListMovies tagList={mockTypeMovies} />
    </FormSearchComponent>
  )
}
