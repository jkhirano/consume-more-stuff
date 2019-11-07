import { LOAD_HABITS, TOGGLE, LOAD_DETAIL } from "../actions";

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

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_HABITS:
      return state.habits;
    case TOGGLE:
      console.log("reducer is handling click");
      let toggleDisplay = state.display;

      for (let key in toggleDisplay) {
        if (key !== action.payload) {
          toggleDisplay[key] = false;
        } else {
          toggleDisplay[key] = true;
        }
      }
      return Object.assign({}, state, { display: toggleDisplay });

    case LOAD_DETAIL:
      console.log("reducer...", action.payload);
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
