import { TOGGLE, LOAD_HABITS, GET_THUMBNAIL } from "../actions";
// import { LOAD_HABITS } from "../actions";
// import { GET_THUMBNAIL } from "../actions";

// reducers holds default state

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
  }
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
      console.log("thumbnail is working");
      console.log(action.payload);
      return Object.assign({}, state, { habits: action.payload });
    // return action.payload; // this becomes the store

    default:
      return state;
  }
};

export default reducer;
