import { combineReducers } from 'redux';
import ranking from './ranking';
import theme from './theme';
import loading from './loading';
import product from './product';
const rootReducer = combineReducers({ ranking, product, theme, loading });
export default rootReducer;
