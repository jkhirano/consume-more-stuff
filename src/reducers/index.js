import {
  TOGGLE,
  ADD_PRODUCT,
  LOAD_HABITS,
  GET_THUMBNAIL,
  LOAD_DETAIL
} from "../actions";

const defaultState = {
  habits: [],
  display: "",
  addedProduct: false,
  name: "",
  description: "",
  price: "",
  manufacturer: "",
  model: "",
  dimensions: "",
  view_count: "",
  user_id: "",
  category_id: "",
  category: { category: "" },
  condition_id: "",
  item_status_id: "",
  created_at: "",
  updated_at: ""
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_HABITS:
      return state.habits;

    case TOGGLE:
      return Object.assign({}, state, { display: action.payload });

    case ADD_PRODUCT:
      return Object.assign({}, state, { addedProduct: true });
    case LOAD_DETAIL:
      console.log("reducer...", action.payload);
      return Object.assign({}, state, action.payload);
    case GET_THUMBNAIL:
      console.log("thumbnail is working");
      console.log(action.payload);
      return Object.assign({}, state, { habits: action.payload });
    // return action.payload; // this becomes the store

    default:
      return state;
  }
};

export default reducer;
