import style from '../Profile/profile.module.css';
import PropTypes from 'prop-types';

const numberWithCommas = num =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={avatar} alt="User avatar" className={style.avatar} />
      <p className={style.name}>{username}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
    <ul className={style.stats}>
      <li className={style.item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>
          {numberWithCommas(stats.followers)}
        </span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{numberWithCommas(stats.views)}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{numberWithCommas(stats.likes)}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
