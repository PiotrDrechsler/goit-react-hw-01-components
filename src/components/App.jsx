import { Profile } from './Profile/Profile'

import user from '../data/user.json';

export const App = () => (
  <>
     <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </>
)
