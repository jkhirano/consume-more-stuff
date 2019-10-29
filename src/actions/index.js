export const TOGGLE = "TOGGLE";

export const actionsToggle = link => {
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};
