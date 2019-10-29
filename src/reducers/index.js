import { GET_HIYEE } from "../actions";

// reducers holds global state

let globalState = {
  message: {}
};

const reducer = (state = globalState, action) => {
  switch (action.type) {
    case GET_HIYEE:
      return Object.assign({}, state, { message: action.payload }); // this becomes the store

    //   state = {
    //       message: {
    //           message: "Hiyee"
    //       }
    //   }

    default:
      return state; // this becomes the store too
  }
};

export default reducer;
