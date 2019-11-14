import {
  TOGGLE,
  ADD_PRODUCT,
  GET_THUMBNAIL,
  LOAD_DETAIL,
  REGISTER_USER,
  LOGIN_USER
} from "../actions";

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
  updated_at: "",
  authenticated: false
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

    case REGISTER_USER:
      return state;

    case LOGIN_USER:
      let { email, id, user_status_id } = action.payload.session;
      let session = Object.assign(
        {},
        { email: email, id: id, user_status_id: user_status_id }
      );
      localStorage.setItem("session", JSON.stringify(session));
      return Object.assign({}, state, { session: session });

    default:
      return state;
  }
};

export default reducer;
