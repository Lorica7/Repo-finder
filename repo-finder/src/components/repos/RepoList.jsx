import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const RepoList = ({repos}) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">

      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Most Recent Repositiories
        </h2>
        <div>
          {' '}{repos.map (repo => {
            return <RepoItem repo={repo} />;
          })}
        </div>
      </div>

    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
