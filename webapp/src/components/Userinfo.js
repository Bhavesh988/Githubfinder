import React from 'react';
import Section from '../styles/Section';
import UserInfoStyles from '../styles/Userinfocss';
import {BiBriefcaseAlt2} from 'react-icons/bi';
import {AiOutlineCalendar} from 'react-icons/ai';
import {MdLocationOn} from 'react-icons/md';
const UserInfo = ({ userData }) => (

  <Section dark>
    {userData && (
      <UserInfoStyles>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}
        <h3>{userData.bio}</h3>
        {userData.login && (
          <h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              @{userData.login}
            </a>
          </h2>
        )}

        <div className="info">
          {userData.company && (
            <span className="info__item">
             <BiBriefcaseAlt2></BiBriefcaseAlt2>
              {userData.company}
            </span>
          )}

          {userData.location && (
            <span className="info__item">
              <MdLocationOn></MdLocationOn>
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span className="info__item">
              <AiOutlineCalendar />
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        <div className="stats">
          <div className="stats__item">
            <span className="num">{userData.public_repos.toLocaleString()}</span>
            <span className="num-label">Repositories</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.followers.toLocaleString()}</span>
            <span className="num-label">Followers</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.following.toLocaleString()}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      </UserInfoStyles>
    )}
  </Section>
);

// UserInfo.propTypes = {
//   userData: PropTypes.object.isRequired,
// };

export default UserInfo;