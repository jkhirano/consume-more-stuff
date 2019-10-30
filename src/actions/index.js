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
