import React from 'react';
import {useContext} from 'react';

import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/GithubContext';
import PropTypes from 'prop-types';

const UserItem = ({user: {login, avatar_url}}) => {
  return (
    <div className="card shadow-md  user-card side bg-base-100">
      <div className="flex-row justify-evenly items-center
 space-x-4 card-body">
        <div className="avatar space-x-4 flex-row justify-evenly items-center ">
          <div className="rounded-full shadow w-14 h-14 show2">
            <img src={avatar_url} alt="Profile" />
          </div>
          <h2 className="card-title show3">{login}</h2>
          <Link
            className="text-base-content show"
            to={`/user/:${login}`}
            // onClick={getUser (login)}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
