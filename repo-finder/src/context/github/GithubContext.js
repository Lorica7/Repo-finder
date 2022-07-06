import {createContext, useReducer} from 'react';
import githubReducer from './Reducer';

const GithubContext = createContext ();

const GH_URL = process.env.REACT_APP_GH_URL;

const GH_TOKEN = process.env.REACT_APP_GH_TOKEN;

export const GithubProvider = ({children}) => {
  const initState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer (githubReducer, initState);

  const searchUsers = async text => {
    // setLoading ();

    const params = new URLSearchParams ({
      q: text,
    });

    const response = await fetch (`${GH_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GH_TOKEN}`,
      },
    });

    const {items} = await response.json ();

    dispatch ({
      type: 'GET_USERS',
      payload: items,
    });
  };

  //Get Single User
  const getUser = async login => {
    setLoading ();
    const log2 = login.substring (1);
    console.log (log2);
    const response = await fetch (`${GH_URL}/users/${log2}`, {
      headers: {
        Authorization: `token ${GH_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = '/fourofour';
      console.log (response);
      setLoading (false);
    } else {
      const info = await response.json ();
      console.log (info);
      dispatch ({
        type: 'GET_USER',
        payload: info,
      });
    }
  };

  const getUserRepos = async login => {
    setLoading ();

    const log3 = login.substring (1);

    const params = new URLSearchParams ({
      sort: 'created',
      per_page: 10,
    });

    const response = await fetch (`${GH_URL}/users/${log3}/repos?${params}`, {
      headers: {
        Authorization: `token ${GH_TOKEN}`,
      },
    });

    const data = await response.json ();
    console.log (data);
    dispatch ({
      type: 'GET_REPOS',
      payload: data,
    });
  };

  const clearUsers = () => dispatch ({type: 'CLEAR_USERS'});

  const setLoading = () => dispatch ({type: 'SET_LOADING'});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
