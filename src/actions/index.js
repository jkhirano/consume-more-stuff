//action types
export const LOAD_HABITS = 'LOAD_HABITS';
export const TOGGLE = "TOGGLE";

//action create
export function loadHabits() {
  return {
    type: LOAD_HABITS
  }
}

export const actionsToggle = link => dispatch => {
  console.log("click being sent to reducer");
  return dispatch({
    type: TOGGLE,
    payload: link
  });
};
