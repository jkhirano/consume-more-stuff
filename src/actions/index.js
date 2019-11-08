//action types
export const EDIT_HABIT = "EDIT_HABIT";

//action creators
export function editHabit(payload) {
  return {
    type: EDIT_HABIT,
    payload
  };
}
