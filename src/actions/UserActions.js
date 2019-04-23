export const initialize = () => {
    return {
      type: "GET_USER"
    };
  };
  
  export const getUserSuccess = data => {
    return {
      type: "GET_USER_SUCCESS",
      data: data.data
    };
  };
  
  export const getUserError = () => {
    return {
      type: "GET_USER_ERROR"
    };
  };
  
  export let username = '';
  export const getUserStory = user => {
    username = user ? user.replace(/\s/g, "") : username;
    
    var apiData = {
      url: `https://api.github.com/users/${username}/repos?sort=created&direction=asc`
    };
    return dispatch => {
      dispatch(initialize());
      return callApi(dispatch, apiData);
    };
  };

  export const getMore = (page) => {
    return (dispatch, getState) => {
      var state = getState();
      if (!state.headers[page]) {
        return;
      }
      
      var apiData = {
        url: state.headers[page],
        isFirstPage: page === 'first',
        isLastPage: page === 'last' || Number(state.page) + 1 === Number(state.totalPage)
      }
      return callApi(dispatch, apiData);
    }
  }
  
  export const callApi = (dispatch, apiData) => {
    return fetch(apiData.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === "Validation Failed") {
          throw new Error("No such user found!!!");
        } else {
          dispatch(getUserSuccess({
            data: data
          }));
        };
      })
      .catch(err => {
        console.log('callApi', err.toString());
        dispatch(getUserError())
      });
  }