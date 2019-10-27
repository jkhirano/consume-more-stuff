export const GET_HIYEE = "GET_HIYEE";

//action creator
export const actionsGetHiyee = () => async dispatch => {
  await fetch("/message") //sends request to server/server.js
    .then(results => {
      console.log(results);
      return results.json(); //changes to json format
    })
    .then(results => {
      console.log("after text", results);
      dispatch({
        type: GET_HIYEE,
        payload: results
      }); //dispatches payload and type to reducer
    })
    .catch(err => {
      console.log(err);
    });
};
