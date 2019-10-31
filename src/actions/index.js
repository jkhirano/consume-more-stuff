<<<<<<< HEAD
// export const GET_HIYEE = "GET_HIYEE";
export const GET_THUMBNAIL = "GET_THUMBNAIL";

// action creator
export const actionsGetThumbnail = () => async dispatch => {
  await fetch("/home") // sends request to server/server.js
    .then(responseFromServer => {
      // console.log(responseFromServer)
      return responseFromServer.json(); // changes from string to json format
    })
    .then(results => {
      // console.log("after text", results)
      dispatch({
        type: GET_THUMBNAIL,
        payload: results
      }); // dispatches payload and type to reducer
    });
};

// export const actionsGetThumbnail = link => dispatch => {
//   console.log("click sent to reducer");
//   return dispatch({
//     type: GET_THUMBNAIL,
//     payload: link
//   });
// };
=======
export const TOGGLE = "TOGGLE";

export const actionsToggle = link => dispatch => {
  console.log("click being sent to reducer");
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};
>>>>>>> 03156b9762b38656b4c75a66a399f506a5823125
