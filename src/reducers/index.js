import { TOGGLE } from "../actions";

let globalState = {
  display: {
    hompage: false,
    hygiene: false,
    work: false,
    home: false,
    social: false,
    viewAll: false
  }
};

const reducer = (state = globalState, action) => {
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

    default:
      return state;
  }
};

export default reducer;
