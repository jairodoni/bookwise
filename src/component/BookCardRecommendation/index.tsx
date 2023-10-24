import Image from 'next/image'
import { BookCardRecommendationContainer, BookInfo } from './styles'
import book from '@/assets/images/o-guia-do-mochileiro-das-galaxias.png'
import { Stars } from '../Stars'

export function BookCardRecommendation() {
  return (
    <BookCardRecommendationContainer>
      <Image src={book} alt="" />
      <BookInfo>
        <div>
          <h2>O guia do mochileiro</h2>
          <span>Douglas Adams</span>
        </div>
        <Stars rating={4} />
      </BookInfo>
    </BookCardRecommendationContainer>
  )
}
