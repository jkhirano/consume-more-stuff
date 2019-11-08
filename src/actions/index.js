//action types
export const EDIT_HABIT = "EDIT_HABIT";
export const LOAD_HABIT = "LOAD_HABIT";

//action creators
export function editHabit(payload) {
  return {
    type: EDIT_HABIT,
    payload
  };
}

export function loadHabits(payload) {
  return {
    type: LOAD_HABIT,
    payload
  };
}
