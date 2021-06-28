import { combineReducers } from 'redux';
import food from './food_items';

const rootReducer = combineReducers(
    {
        food
    }
)

export default rootReducer;