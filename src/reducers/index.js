import { LOAD_HABITS } from '../actions';

const defaultState = {
  habits: [
    {
      name: 'Bitting nail',
      category: 'Hygiene'
    },
    {
      name: 'Not washing your hand',
      category: 'Hygiene'
    },
    {
      name: 'Not taking shower',
      category: 'Hygiene'
    }
  ]
}

let reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_HABITS:
      return state.habits;
    default:
      return state
  }
}

export default reducer;