import React from "react";
import PropTypes from 'prop-types'
import styled from './Profile.module.css'


const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
  <div className={styled.profile}>
    <div className={styled.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={styled.avatar}
      />
      <p className={styled.name}>{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={styled.stats}>
      <li>
        <span className={styled.label}>Followers</span>
        <span className={styled.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styled.label}>Views</span>
        <span className={styled.quantity}>{views}</span>
      </li>
      <li>
        <span className={styled.label}>Likes</span>
        <span className={styled.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  name: "Sing up, pls",
  followers: '-',
  views: '-',
  likes: '-',
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}


export default Profile;
