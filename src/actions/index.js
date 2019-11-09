export const LOAD_HABITS = "LOAD_HABITS";
export const TOGGLE = "TOGGLE";
export const LOAD_DETAIL = "LOAD_DETAIL";
export const GET_THUMBNAIL = "GET_THUMBNAIL";
export const ADD_PRODUCT = "ADD_PRODUCT";

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

export const actionsAddProduct = data => async dispatch => {
  console.log("data in actions.js", data);
  let config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  };
  await fetch("/products", config)
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log("results in actionsAddProduct", results);
      return dispatch({
        type: ADD_PRODUCT,
        payload: results
      });
    })
    .catch(err => {
      console.log(err);
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
export const actionsGetThumbnail = category => async dispatch => {
  let config = {
    method: "GET",
    body: JSON.stringify(category),
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log("actionsGetThumbnailHit");
  await fetch("/home", config) // sends request to server/server.js
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
