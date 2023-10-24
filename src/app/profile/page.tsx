import { Sidebar } from '@/component'
import { ProfileContainer } from '@/styles/page/profile'
import { Header } from '@/component/Header'

export default function Profile() {
  return (
    <ProfileContainer>
      <Header page="/profile" />
      <main></main>
    </ProfileContainer>
  )
}
