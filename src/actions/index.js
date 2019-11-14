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
  console.log("LOADHABITS");
  console.log(payload);
  return {
    type: LOAD_HABIT,
    payload
  };
}

// action creators async
export const loadHabitsAsync = () => async dispatch => {
  await fetch("/habits")
    .then(response => {
      return response.json();
    })
    .then(habits => {
      dispatch({
        type: LOAD_HABIT,
        payload: habits
      });
    });
};

export const editHabitAsync = habit => async dispatch => {
  await fetch("/habits", {
    method: "POST",
    body: JSON.stringify(habit),
    header: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(body => {
      dispatch({
        type: EDIT_HABIT,
        payload: body
      });
    });
};
