export const initialize = () => {
    return {
      type: "GET_USER"
    };
  };
  
  export const getUserSuccess = result => {
    return {
      type: "GET_USER_SUCCESS",
      repos: result.repos, 
      userInfo: result.userInfo
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
    
    return dispatch => {
      dispatch(initialize());
      const urls = [
        `https://api.github.com/users/${username}/repos?sort=created&direction=asc`,
        `https://api.github.com/users/${username}`
      ]
      Promise.all(urls.map(url => fetch(url))).then(responses => {
        Promise.all(responses.map(res => res.text())).then(texts => {
          let result = {
            repos: JSON.parse(texts[0]),
            userInfo: JSON.parse(texts[1])
          };
          dispatch(getUserSuccess(result));
        });
      });
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
  
  export const callApi = (resolve, reject, apiData) => {
    return fetch(apiData.url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.message === "Not Found") {
          throw new Error("No such user found!!!");
        } else {
          // dispatch(getUserSuccess({
          //   data: data
          // }));
          resolve(data.data)
        };
      })
      .catch(err => {
        console.log('callApi', err.toString());
        dispatch(getUserError());
      });
  }