const initialState = {
  isError: false,
  isFetching: false,
  data: [],
  user: {}
};
  
const UserReducer = (state = initialState, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'GET_USER':
        return Object.assign({}, state, {
          isError: false,
          isFetching: true,
          data: [],
          user: {}
        });
      case 'GET_USERSTORY_SUCCESS':
        return Object.assign({}, state, {
          isError: false,
          isFetching: false,
          data: processData(action.data)
        });
      case 'GET_USER_SUCCESS':
        return Object.assign({}, state, {
          isError: false,
          isFetching: false,
          data: action.data,
          user: processUser(action.user)
        });
      case 'GET_USER_ERROR':
        return Object.assign({}, state, {
          isFetching: false,
          isError: true,
          data: []
        });
    default:
      return state;
    }
  }
  export default UserReducer;

  export const processData = function(data) {
    return data.map(d => {
      return {
        dateCreated : new Date(d.created_at).toDateString(),
        name: d.name,
        url : d.html_url,
        description: d.description,
        id: d.id,
        stars: Number(d.stargazers_count).toLocaleString(),
        forks: Number(d.forks).toLocaleString(),
        language: d.language
      };
    });
  }

  export const processUser = function(user) {
    return user;
  }