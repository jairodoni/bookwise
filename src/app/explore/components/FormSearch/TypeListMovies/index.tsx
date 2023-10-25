import { MovieTypeTag } from './MovieTypeTag'

interface TagList {
  tag: string
  tagStyle?: 'fill' | 'outline'
}

interface TagListMoviesProps {
  tagList: TagList[]
}

export function TagListMovies({ tagList }: TagListMoviesProps) {
  return (
    <div>
      {tagList.map((typeMovie: TagList) => (
        <MovieTypeTag
          key={typeMovie.tag}
          tag={typeMovie.tag}
          type={typeMovie.tagStyle}
        />
      ))}
    </div>
  )
}
