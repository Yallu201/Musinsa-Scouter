import { combineReducers } from 'redux';
import ranking from './ranking';
import theme from './theme';
import loading from './loading';
import product from './product';
import brands from './brands';
const rootReducer = combineReducers({ ranking, product, brands, theme, loading });
export default rootReducer;
