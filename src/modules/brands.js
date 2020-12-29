import { handleActions } from 'redux-actions';
import createRequestThunk from 'lib/createRequestThunk';
import * as api from 'lib/firebaseAPI';

const GET_BRANDS = 'brands/GET_BRANDS';
const GET_BRANDS_SUCCESS = 'brands/GET_BRANDS_SUCCESS';
const GET_BRANDS_FAILURE = 'brands/GET_BRANDS_FAILURE';

export const getBrands = createRequestThunk(GET_BRANDS, api.getBrands);

const initialState = {
  origin: {},
  isInit: false,
};

const brands = handleActions(
  {
    [GET_BRANDS_SUCCESS]: (state, { payload: brands }) => {
      if (state.isInit) return state;
      return { ...state, origin: brands, isInit: true };
    },
    [GET_BRANDS_FAILURE]: (state, { payload: brands }) => {
      return state;
    },
  },
  initialState
);

export default brands;
