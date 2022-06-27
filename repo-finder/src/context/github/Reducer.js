const githubReducer = (state, event) => {
  switch (event.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: event.payload,
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
    default:
      return state;
  }
};

export default githubReducer;
