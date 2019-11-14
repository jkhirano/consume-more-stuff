import { EDIT_HABIT, LOAD_HABIT } from "../actions";

const defaultState = {
  habits: [
    {
      id: 1,
      name: "Bitting nail",
      category: "Hygiene"
    },
    {
      id: 2,
      name: "Not washing your hand",
      category: "Hygiene"
    },
    {
      id: 3,
      name: "Not taking shower",
      category: "Hygiene"
    }
  ]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_HABIT:
      const filteredHabits = state.habits.filter(function(element) {
        if (element.id !== action.payload.id) return element;
      });
      const mergedHabits = [...filteredHabits, action.payload];
      return { habits: mergedHabits };

    case LOAD_HABIT:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
