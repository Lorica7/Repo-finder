import React from 'react';
import {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';

import {FontAwesome, FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-fontawesome';

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
    followers,
    following,
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

  return <>{user.login}
  <div className="w-full mx-auto lg:w-10">
    <div className='mb-4'>
      <Link to='/' className='btn btn-ghost'>
        Back to Search
      </Link>
    </div>
    </div>
    </>;
};

export default User;
