const initialState = {
  isError: false,
  isFetching: false,
  repos: [],
  userInfo: {}
};
  
const UserReducer = (state = initialState, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'GET_USER':
        return Object.assign({}, state, {
          isError: false,
          isFetching: true,
          repos: [],
        });
      case 'GET_USER_SUCCESS':
        return Object.assign({}, state, {
          isError: false,
          isFetching: false,
          repos: processRepos(action.repos)
        });
      case 'GET_USER_ERROR':
        return Object.assign({}, state, {
          isFetching: false,
          isError: true,
          repos: [],
          userInfo: {}
        });
    default:
      return state;
    }
  }
  export default UserReducer;

  export const processRepos = function(repos) {
    return repos.map(repo => {
      return {
        dateCreated : new Date(repo.created_at).toDateString(),
        name: repo.name,
        url : repo.html_url,
        description: repo.description,
        id: repo.id,
        stars: Number(repo.stargazers_count).toLocaleString(),
        forks: Number(repo.forks).toLocaleString(),
        language: repo.language
      };
    });
  }