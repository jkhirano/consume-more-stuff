export const LOAD_HABITS = "LOAD_HABITS";
export const TOGGLE = "TOGGLE";
export const LOAD_DETAIL = "LOAD_DETAIL";
export const GET_THUMBNAIL = "GET_THUMBNAIL";

export function loadDetail(payload) {
  return {
    type: LOAD_DETAIL,
    payload
  };
}

//action create
export function loadHabits() {
  return {
    type: LOAD_HABITS
  };
}

export const actionsToggle = link => dispatch => {
  console.log("click being sent to reducer");
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
      console.log("loadDetailAsync receiving payload..", habit);
      dispatch({
        type: LOAD_DETAIL,
        payload: habit
      });
    });
};
export const actionsGetThumbnail = () => async dispatch => {
  console.log("actionsGetThumbnailHit");
  await fetch("/home") // sends request to server/server.js
    .then(responseFromServer => {
      // console.log(responseFromServer)
      return responseFromServer.json(); // changes from string to json format
    })
    .then(results => {
      console.log("after text", results);
      return dispatch({
        type: GET_THUMBNAIL,
        payload: results
      }); // dispatches payload and type to reducer
    });
};
