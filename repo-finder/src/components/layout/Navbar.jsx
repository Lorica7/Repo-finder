import React from 'react';
import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({title}) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px2 mx-2" />
        <FaGithub className="inline pr-2 text-3xl" />
      </div>

    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Repo Finder',
};

Navbar.propTypes = {
  title: propTypes.string,
};

export default Navbar;
