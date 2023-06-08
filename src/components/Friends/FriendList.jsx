import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';

const FriendList = ({ friends = [] }) => {
  return (
    <ul className={style.friendList}>
      {friends && <h2 className="title-friends">Friends</h2>}
      {friends.length > 0 && friends.map( friend => <FriendListItem key={friend.id} {...friend}/>)}
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
