import PropTypes from 'prop-types';
import style from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <li className={style.item}>
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
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem