import { TOGGLE } from "../actions";
import { LOAD_HABITS } from "../actions";
import { GET_THUMBNAIL } from "../actions";

// reducers holds default state

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
  ],
  display: {
    //the components that correspond to the values below can tap into this object to self-determine if they should be displayed or hidden, which I believe should be done on componentDidMount?
    homepage: false,
    hygiene: false,
    work: false,
    home: false,
    social: false,
    viewAll: false
  },
  message: {}
};

let reducer = (state = defaultState, action) => {
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

    case GET_THUMBNAIL:
      // let getThumbnailDisplay = state.display;

      // for (let key in getThumbnailDisplay) {
      //   if (key !== action.payload) {
      //     getThumbnailDisplay[key] = false;
      //   } else {
      //     getThumbnailDisplay[key] = true;
      //   }
      // }
      // return Object.assign({}, state, { display: getThumbnailDisplay }); // this becomes the store
      return Object.assign({}, state, { message: action.payload }); // this becomes the store

    default:
      return state;
  }
};

export default reducer;
