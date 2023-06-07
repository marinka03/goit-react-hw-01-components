import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          width={150}
          height={150}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
