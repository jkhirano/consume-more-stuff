export const TOGGLE = "TOGGLE";

export const actionsToggle = link => dispatch => {
  console.log("click being sent to reducer");
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};
