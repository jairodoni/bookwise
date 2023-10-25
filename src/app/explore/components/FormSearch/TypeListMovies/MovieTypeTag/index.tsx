import { MovieTypeTagContainer } from './styles'

interface MovieGenreTagProps {
  tag: string
  type?: 'fill' | 'outline'
}

export function MovieTypeTag({ tag, type = 'outline' }: MovieGenreTagProps) {
  return (
    <MovieTypeTagContainer type={type}>
      <span>{tag}</span>
    </MovieTypeTagContainer>
  )
}
