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
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
 
};

export default FriendList;
