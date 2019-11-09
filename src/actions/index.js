export const TOGGLE = "TOGGLE";
export const LOAD_DETAIL = "LOAD_DETAIL";
export const GET_THUMBNAIL = "GET_THUMBNAIL";

export function loadDetail(payload) {
  return {
    type: LOAD_DETAIL,
    payload
  };
}

export const actionsToggle = link => dispatch => {
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};

export const loadDetailAsync = id => async dispatch => {
  await fetch(`/habit/${id}`)
    .then(response => {
      return response.json();
    })
    .then(habit => {
      dispatch({
        type: LOAD_DETAIL,
        payload: habit
      });
    });
};
export const actionsGetThumbnail = () => async dispatch => {
  await fetch("/thumbnail") // sends request to server/server.js
    .then(responseFromServer => {
      return responseFromServer.json(); // changes from string to json format
    })
    .then(results => {
      return dispatch({
        type: GET_THUMBNAIL,
        payload: results
      }); // dispatches payload and type to reducer
    });
};
