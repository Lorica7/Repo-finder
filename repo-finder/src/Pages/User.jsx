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

  return <>{user.login}
  <div className="w-full mx-auto lg:w-10">
    <div className='mb-4'>
      <Link to='/' className='btn btn-ghost'>
        Back to Search
      </Link>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custm-card-image mb-6 md:-0 ">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt='' />
            </figure>
            <div className='card-body justify-end'>
              <h2 className="littleH" >{name}</h2>
              <p>{ login }</p>
            </div>
          </div>
</div>
      </div>
    </div>
    </>
};

export default User;
