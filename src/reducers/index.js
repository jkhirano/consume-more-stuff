import {
  TOGGLE,
  ADD_PRODUCT,
  GET_THUMBNAIL,
  LOAD_DETAIL
} from "../actions";

const defaultState = {
  habits: [],
  display: {
    //the components that correspond to the values below can tap into this object to self-determine if they should be displayed or hidden, which I believe should be done on componentDidMount?
    homepage: false,
    hygiene: false,
    work: false,
    home: false,
    social: false,
    viewAll: false
  },
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
  user: { username: "" },
  created_at: "",
  updated_at: ""
};

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE:
      let toggleDisplay = state.display;

      for (let key in toggleDisplay) {
        if (key !== action.payload) {
          toggleDisplay[key] = false;
        } else {
          toggleDisplay[key] = true;
        }
      }
      return Object.assign({}, state, { display: toggleDisplay });

    case ADD_PRODUCT:
      return Object.assign({}, state, { addedProduct: true });
      
    case LOAD_DETAIL:
      console.log("detail loaded...", action.payload);
      return Object.assign({}, state, action.payload);

    case GET_THUMBNAIL:
      console.log("thumbnails loaded...", action.payload);
      return Object.assign({}, state, { habits: action.payload });

    default:
      return state;
  }
};

export default reducer;
