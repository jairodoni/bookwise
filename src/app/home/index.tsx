import { HomeContainer } from '@/styles/page/home'
import { BookCardReview } from '@/component'
import { SeeAllButton } from '@/component/SeeAllButton'
import { Header } from '@/component/Header'
import { BookCardRecommendation } from '@/component/BookCardRecommendation'

export default function Home() {
  return (
    <HomeContainer>
      <Header page="/" />
      <main>
        <div>
          <span>Avaliações mais recentes</span>
          <BookCardReview />
          <BookCardReview />
          <BookCardReview />
        </div>
        <div>
          <div>
            <span>Livros populares</span>
            <SeeAllButton path="/explore" />
          </div>
          <BookCardRecommendation />
          <BookCardRecommendation />
          <BookCardRecommendation />
        </div>
      </main>
    </HomeContainer>
  )
}
