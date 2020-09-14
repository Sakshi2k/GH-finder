import React from "react";
import { Link } from "react-router-dom";

// const UserItem = ({ user: { login, avatar_url, html_url, name } }) => {
const UserItem = ({ user }) => {
  const defaultImg =
    "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";

  return (
    <div className='card text-center'>
      <img
        src={user.avatar_url || defaultImg}
        alt='user'
        className='round-img userAvatar'
      />
      <h4 className='lead'>{user.login}</h4>
      <div>
        <Link to={`/user/${user.login}`} className='btn btn-sm btn-dark'>
          See More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
