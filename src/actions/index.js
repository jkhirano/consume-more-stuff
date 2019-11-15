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

// export const TOGGLE = "TOGGLE";
// export const LOAD_DETAIL = "LOAD_DETAIL";
// export const GET_THUMBNAIL = "GET_THUMBNAIL";
// export const ADD_PRODUCT = "ADD_PRODUCT";

// export const actionsToggle = link => dispatch => {
//   return dispatch({
//     type: TOGGLE,
//     payload: link
//   });
// };

// export const actionsAddProduct = data => async dispatch => {
//   let config = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json"
//     }
//   };
//   await fetch("/api/habits", config)
//     .then(response => {
//       return response.json();
//     })
//     .then(results => {
//       return dispatch({
//         type: ADD_PRODUCT,
//         payload: results
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// export const loadDetailAsync = id => async dispatch => {
//   await fetch(`/api/habits/${id}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(habit => {
//       dispatch({
//         type: LOAD_DETAIL,
//         payload: habit
//       });
//     });
// };

// export const actionsGetThumbnail = category => async dispatch => {
//   await fetch(`/api/habits/cat/${category}`)
//     .then(responseFromServer => {
//       return responseFromServer.json();
//     })
//     .then(results => {
//       return dispatch({
//         type: GET_THUMBNAIL,
//         payload: results
//       });
//     });
// };
