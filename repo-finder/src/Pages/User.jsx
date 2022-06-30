import React from 'react';
import {useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';

import {
  FontAwesome,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from 'react-fontawesome';

import {Link} from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

import GithubContext from '../context/github/GithubContext';

export const User = () => {
  const {getUser, user, loading} = useContext (GithubContext);

  const params = useParams ();

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
    followers_url,
    following_url,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect (() => {
    getUser (params.login);
  }, []);

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
      </div>
    </div>
  );
};

export default User;
