import React from 'react';
import {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';

import {
  FontAwesome,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa';

import {Link} from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

import GithubContext from '../context/github/GithubContext';

const User = () => {
  const {getUser, user, loading} = useContext (GithubContext);

  const params = useParams ();

  useEffect (() => {
    getUser (params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following_url,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {user.login}
      <div className="wrapper">
        <div className="link-wrap">
          <Link to="/" className="link">
            Back to Search
          </Link>
        </div>
        <img src={avatar_url} alt="" />

        <div className="card-body">
          <h2 className="littleH">{name}</h2>
          <p>{login}</p>
          <h1>
            {name}
            <span>{type}</span>
          </h1>
          {hireable && <div className="hire">Availble for Hire</div>}
          <p>{bio}</p>
          <div>
            <a href={html_url} target="_blank" rel="noreferrer">
              Visit Github Profile
            </a>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-md bg-base-100 stats">
          {location &&
            <div className="stat">
              <div className="stat-title text-md"> Location </div>

              <div className="text-lg stat-value"> {Location}</div>
            </div>}
          {blog &&
            <div className="stat">
              <div className="stat-title text-md"> Website </div>
              <div className="text-lg stat-value">
                <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                  {' '}{blog}{' '}
                </a>
                {blog}
              </div>
            </div>}
          {twitter_username &&
            <div className="stat">
              <div className="stat-title text-md"> Twitter </div>
              <div className="text-lg stat-value">
                <a
                  href={`https://twitter.com/${twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}{twitter_username}{' '}
                </a>

              </div>
            </div>}

        </div>
      </div>
      <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />{' '}
          </div>
          <div className="stat-title pr-5">
            Followers
          </div>
          <div className="text-3xl md:text-4xl">{followers} </div>
        </div>
      </div>
    </div>
  );
};

export default User;
