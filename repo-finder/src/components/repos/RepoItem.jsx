import React from 'react';
import PropTypes from 'prop-types';
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa';

function RepoItem () {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div>
      item
    </div>
  );
}

RepoItem.PropTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
