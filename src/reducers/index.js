import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import DishesReducer from './reducer_dishes';
import ActiveDishReducer from './reducer_active_dish';

const rootReducer = combineReducers({
  dishes: DishesReducer,
  activeDish: ActiveDishReducer,
  routing: routerReducer
});

export default rootReducer;
