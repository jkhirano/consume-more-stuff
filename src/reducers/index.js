import { EDIT_HABIT } from ".../actions";

const defaultState = {
  habits: [
    {
      name: "Bitting nail",
      category: "Hygiene"
    },
    {
      name: "Not washing your hand",
      category: "Hygiene"
    },
    {
      name: "Not taking shower",
      category: "Hygiene"
    }
  ]
};

const reducer =
  ((state = defaultState),
  action => {
    switch (action.type) {
      case EDIT_HABIT:
        // const habits = state.habits.concat(action.payload);
        return { habits };
      default:
        return state;
    }
  });

export default reducer;
