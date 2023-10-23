import { HomeContainer } from '@/styles/page/home'
import { HeadHome } from './components'
import { BookCardReview } from '@/component'

export default function Home() {
  return (
    <HomeContainer>
      <HeadHome />
      <main>
        <span>Avaliações mais recentes</span>
        <BookCardReview />
        <BookCardReview />
        <BookCardReview />
      </main>
    </HomeContainer>
  )
}
