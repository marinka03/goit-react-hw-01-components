import PropTypes from 'prop-types';
import style from '../friends/Friend-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends && <h2 className="title-friends">Friends</h2>}
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={style.item}>
          {isOnline ? (
            <div className={style.isOnline}></div>
          ) : (
            <div className={style.isOnlineFalse}></div>
          )}
          <img
            src={avatar}
            alt="User avatar"
            className={avatar}
            width={70}
            height={70}
          />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
