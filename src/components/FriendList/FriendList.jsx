import style from '../FriendList/friendList.module.css';
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        name={name}
        avatar={avatar}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
