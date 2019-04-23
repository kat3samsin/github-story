const initialState = {
    isError: false,
    isFetching: false,
    data: [],
  };
  
  const UserReducer = (state = initialState, action) => {
    console.log('action', action)
    switch(action.type) {
      case 'GET_USER':
          return Object.assign({}, state, {
            isError: false,
            isFetching: true,
            data: [],
          });
        case 'GET_USER_SUCCESS':
          return Object.assign({}, state, {
            isError: false,
            isFetching: false,
            data: action.data
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