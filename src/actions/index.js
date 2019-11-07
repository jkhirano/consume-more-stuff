export const LOAD_HABITS = "LOAD_HABITS";
export const TOGGLE = "TOGGLE";
export const LOAD_DETAIL = "LOAD_DETAIL";

export function loadDetail(payload) {
  return {
    type: LOAD_DETAIL,
    payload
  };
}

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
