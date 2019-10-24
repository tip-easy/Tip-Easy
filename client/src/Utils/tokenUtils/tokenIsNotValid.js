export const tokenIsNotValid = (type) => dispatch => {
  return dispatch({ 
    type: type, 
    payload: {
      error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
    } 
  });
}