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

  const fetchUsers = async () => {
    setLoading ();

    const response = await fetch (`${GH_URL}/users`, {
      headers: {
        Authorization: `token ${GH_TOKEN}`,
      },
    });

    const data = await response.json ();

    dispatch ({
      type: 'GET_USERS',
      payload: data,
    });
  };

  const setLoading = () => dispatchEvent ({type: 'SET_LOADING'});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
