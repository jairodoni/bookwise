import Image from 'next/image'
import {
  ButtonsList,
  GradientDiv,
  LogoBackground,
  SidebarContainer,
} from './styles'
import bookwiseLoginPage from '@/assets/images/logo.svg'
import { ButtonsMenu } from './ButtonsMenu'
import { ProfileComponent } from './ProfileComponent'

export function Sidebar() {
  return (
    <SidebarContainer>
      <GradientDiv />
      <LogoBackground>
        <Image src={bookwiseLoginPage} alt="" />
      </LogoBackground>
      <ButtonsList>
        <ButtonsMenu />
        <ProfileComponent />
      </ButtonsList>
    </SidebarContainer>
  )
}
