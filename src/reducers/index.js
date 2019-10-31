<<<<<<< HEAD
// import { GET_HIYEE } from "../actions";
import { GET_THUMBNAIL } from "../actions";

// reducers holds global state

let globalState = {
  // display: {
  //   thumbnail: false
  // }
  message: {}
=======
import { TOGGLE } from "../actions";

let globalState = {
  display: {
    //the components that correspond to the values below can tap into this object to self-determine if they should be displayed or hidden, which I believe should be done on componentDidMount?
    homepage: false,
    hygiene: false,
    work: false,
    home: false,
    social: false,
    viewAll: false
  }
>>>>>>> 03156b9762b38656b4c75a66a399f506a5823125
};

const reducer = (state = globalState, action) => {
  switch (action.type) {
<<<<<<< HEAD
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
=======
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

    default:
      return state;
>>>>>>> 03156b9762b38656b4c75a66a399f506a5823125
  }
};

export default reducer;
