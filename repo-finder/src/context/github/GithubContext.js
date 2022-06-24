import {createContext, useState} from 'react';

const GithubContext = createContext ();

const GH_URL = process.env.REACT_APP_GH_URL;

const GH_TOKEN = process.env.REACT_APP_GH_TOKEN;

export const GithubProvider = ({children}) => {
  const [users, setUsers] = useState ([]);
  const [loading, setLoading] = useState (true);

  const fetchUsers = async () => {
    const response = await fetch (`${GH_URL}/users`, {
      headers: {
        Authorization: `token ${GH_TOKEN}`,
      },
    });

    const data = await response.json ();
    setLoading (false);
    console.log (data);
    setUsers (data);
  };
  return (
    <GithubContext.Provider value={{users, loading, fetchUsers}}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
