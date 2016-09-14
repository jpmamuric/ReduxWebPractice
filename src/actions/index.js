import axios from 'axios';
import { FETCH_DISH } from './types';

export function fetchDish(dish) {
  return {
      type: FETCH_DISH,
      payload: dish
    };
  }
