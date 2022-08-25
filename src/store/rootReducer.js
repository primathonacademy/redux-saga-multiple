import { combineReducers } from 'redux';
import mathReducer from '../maths/store/reducer';
import jokeReducer from '../jokes/store/reducer';

const rootReducer = combineReducers({
  math: mathReducer,
  joke: jokeReducer,
});

export default rootReducer;
