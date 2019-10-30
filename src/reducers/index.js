// import { GET_HIYEE } from "../actions";
import { GET_THUMBNAIL } from "../actions";

// reducers holds global state

let globalState = {
  // display: {
  //   thumbnail: false
  // }
  message: {}
};

const reducer = (state = globalState, action) => {
  switch (action.type) {
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
      return state; // this becomes the store too
  }
};

export default reducer;
