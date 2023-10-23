import { Sidebar } from '@/component'
import { ProfileContainer } from '@/styles/page/profile'
import { HeadProfile } from './components/index'

export default function Profile() {
  return (
    <ProfileContainer>
      <HeadProfile />
      <main></main>
    </ProfileContainer>
  )
}
