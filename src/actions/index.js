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

export const actionsToggle = link => dispatch => {
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
      dispatch({
        type: LOAD_DETAIL,
        payload: habit
      });
    });
};
<<<<<<< HEAD

export const actionsGetThumbnail = category => async dispatch => {
  // let config = {
  //   method: "GET",
  //   body: JSON.stringify({
  //     category: category
  //   }),
  //   headers: {
  //     "Content-type": "application/json"
  //   }
  // };
  await fetch(`/thumbnail/${category}`) // sends request to server/server.js
=======
export const actionsGetThumbnail = () => async dispatch => {
  await fetch("/thumbnail") // sends request to server/server.js
>>>>>>> 8bf7fd3d6e9940dfeb456c63195d1f7a810454e1
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
