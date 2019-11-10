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
    case TOGGLE:
      return Object.assign({}, state, { display: action.payload });

    case ADD_PRODUCT:
      return Object.assign({}, state, { addedProduct: true });
    case LOAD_DETAIL:
      return Object.assign({}, state, action.payload);
    case GET_THUMBNAIL:
      return Object.assign({}, state, { habits: action.payload });
    default:
      return state;
  }
};

export default reducer;
