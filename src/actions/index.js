//action types
export const EDIT_ITEM = "EDIT_ITEM";

//action creators
export const actionsEditItem = data => async dispatch => {
  console.log("ACTIONS EDIT ITEM");
  console.log(data);
  console.log(JSON.stringify(data));
  let config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  };
  console.log(config);
  await fetch(`/api/habits/${data.id}`, config)
    .then(response => {
      return response.json();
    })
    .then(results => {
      return dispatch({
        type: EDIT_ITEM,
        payload: results
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// PULLED DOWN FROM DEV

export const TOGGLE = "TOGGLE";
export const LOAD_DETAIL = "LOAD_DETAIL";
export const GET_THUMBNAIL = "GET_THUMBNAIL";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const actionsToggle = link => dispatch => {
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};

export const actionsAddProduct = data => async dispatch => {
  let config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  };
  await fetch("/api/habits", config)
    .then(response => {
      return response.json();
    })
    .then(results => {
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
  await fetch(`/api/habits/${id}`)
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

export const actionsGetThumbnail = category => async dispatch => {
  await fetch(`/api/habits/cat/${category}`)
    .then(responseFromServer => {
      return responseFromServer.json();
    })
    .then(results => {
      return dispatch({
        type: GET_THUMBNAIL,
        payload: results
      });
    });
};
