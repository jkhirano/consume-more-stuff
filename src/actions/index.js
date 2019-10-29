//action types
export const LOAD_HABIT = 'LOAD_HABIT';

//action create
export function loadHabits(payload) {
  return {
    type: LOAD_HABIT,
    payload
  }
}