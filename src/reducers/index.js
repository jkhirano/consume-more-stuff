import { TOGGLE, ADD_PRODUCT, GET_THUMBNAIL, LOAD_DETAIL } from "../actions";

const defaultState = {
  habits: [],
  display: "all",
  addedProduct: false,
  name: "",
  description: "",
  price: "",
  manufacturer: "",
  model: "",
  dimensions: "",
  view_count: "",
  category: { category: "" },
  condition: { condition: "" },
  status: { status: "" },
  user: { email: "" },
  created_at: "",
  updated_at: ""
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, { display: action.payload });

    case ADD_PRODUCT:
      return Object.assign({}, state, { addedProduct: true });

    case LOAD_DETAIL:
      return Object.assign({}, state, action.payload);

    case GET_THUMBNAIL:
      return Object.assign({}, state, {
        habits: action.payload
      });
    default:
      return state;
  }
};

export default reducer;

// RIAN'S CURRENTLY DEPRECATED CODE

// import { EDIT_HABIT, LOAD_HABIT } from "../actions";

// const defaultState = {
//   habits: [
//     {
//       id: 1,
//       name: "Bitting nail",
//       category: "Hygiene"
//     },
//     {
//       id: 2,
//       name: "Not washing your hand",
//       category: "Hygiene"
//     },
//     {
//       id: 3,
//       name: "Not taking shower",
//       category: "Hygiene"
//     }
//   ]
// };

// const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case EDIT_HABIT:
//       const filteredHabits = state.habits.filter(function(element) {
//         if (element.id !== action.payload.id) return element;
//       });
//       const mergedHabits = [...filteredHabits, action.payload];
//       return { habits: mergedHabits };

//     case LOAD_HABIT:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default reducer;
