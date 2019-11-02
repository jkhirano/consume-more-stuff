export const TOGGLE = "TOGGLE";
export const ADD_PRODUCT = "ADD_PRODUCT";

export const actionsToggle = link => dispatch => {
  console.log("click being sent to reducer");
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
