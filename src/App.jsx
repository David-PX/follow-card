import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <div className='ds-app'>
        <TwitterFollowCard userName='David-Gcs' name='David Solano' isFollowing />
        <TwitterFollowCard userName='midudev' name='Miguel Angel' isFollowing={false} />
    </div>
  )
}