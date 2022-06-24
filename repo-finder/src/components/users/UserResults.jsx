import React from 'react';
import {useEffect, useContext} from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {
  const {users, loading, fetchUsers} = useContext (GithubContext);

  useEffect (() => {
    fetchUsers ();
  }, []);

  console.log (users);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map (user => <UserItem key={user.id} user={user} />)}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default UserResults;
