import React from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import Header from '../components/layout/Header';

export const Home = () => {
  return (
    <div className="home-wrap">
      <Header />
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
