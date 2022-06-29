import React from 'react';
import {useContext} from 'react';

import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import PropTypes from 'prop-types';

function UserItem({user: {login, avatar_url}}) {
  const {getUser} = useContext (GithubContext);

  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="felx-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="Profile" />
          </div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/:${login}`}
            onClick={getUser (login)}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
