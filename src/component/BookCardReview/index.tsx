import Image from 'next/image'
import { Avatar } from '../Avatar'
import {
  BookCardReviewContainer,
  BookReview,
  HeaderCard,
  Perfil,
} from './styles'
import book from '@/assets/images/o-guia-do-mochileiro-das-galaxias.png'
import { Stars } from './Stars'

export function BookCardReview() {
  return (
    <BookCardReviewContainer>
      <HeaderCard>
        <Perfil>
          <div>
            <Avatar />
            <div>
              <span>Jairo Doni</span>
              <span>Hoje</span>
            </div>
          </div>
          <div>
            <Stars rating={4} />
          </div>
        </Perfil>
      </HeaderCard>
      <BookReview>
        <Image src={book} alt="" />
        <div>
          <h2>O guia do mochileiro das galaxias</h2>
          <span>Douglas Adams</span>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
        </div>
      </BookReview>
    </BookCardReviewContainer>
  )
}
