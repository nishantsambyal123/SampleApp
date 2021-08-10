function dispatchResponseToReducers(
  serviceMethod,
  actionTypeSuccess,
  actionTypeFailure,
  actionTypeInProgress,
) {
  return dispatch => {
    dispatch({
      type: actionTypeInProgress,
    });
    serviceMethod()
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(responseJson => {
        console.log('responseJson', responseJson);
        dispatch({
          type: actionTypeSuccess,
          payload: responseJson,
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypeFailure,
          error: error,
        });
      });
  };
}

export default dispatchResponseToReducers;
