import {createContext, useReducer} from 'react';
import githubReducer from './Reducer';

const GithubContext = createContext ();

const GH_URL = process.env.REACT_APP_GH_URL;

const GH_TOKEN = process.env.REACT_APP_GH_TOKEN;

export const GithubProvider = ({children}) => {
  const initState = {
    users: [],
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

  const clearUsers = () => dispatch ({type: 'CLEAR_USERS'});

  const setLoading = () => dispatch ({type: 'SET_LOADING'});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
