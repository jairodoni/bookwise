import Image from 'next/image'
import google from '@/assets/images/google.svg'
import github from '@/assets/images/github.svg'
import visitante from '@/assets/images/visitante.svg'
import {
  LoginContainer,
  LoginSectionImage,
  WelcomeComponent,
} from '@/styles/page/login'

export default function Login() {
  return (
    <LoginContainer>
      <LoginSectionImage />
      <WelcomeComponent>
        <h1>Boas vindas!</h1>
        <span>Faça seu login ou acesse como visitante.</span>

        <button>
          <Image src={google} alt="" />
          Entrar com Google
        </button>
        <button>
          <Image src={github} alt="" />
          Entrar com GitHub
        </button>
        <button>
          <Image src={visitante} alt="" />
          Acessar como visitante
        </button>
      </WelcomeComponent>
    </LoginContainer>
  )
}
