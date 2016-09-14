import { FETCH_DISH } from '../actions/types';


export default (state = [] , action) => {

  switch (action.type) {
    case FETCH_DISH:
      return action.payload;
      break;
    default:
      return state;
  }
}
