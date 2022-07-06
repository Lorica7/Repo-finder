const githubReducer = (state, event) => {
  switch (event.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: event.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: event.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: event.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
