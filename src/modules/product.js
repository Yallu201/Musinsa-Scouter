import { handleActions } from 'redux-actions';
import createRequestThunk from 'lib/createRequestThunk';
import * as api from 'lib/firebaseAPI';

const GET_PRODUCT = 'product/GET_PRODUCT';
const GET_PRODUCT_SUCCESS = 'product/GET_PRODUCT_SUCCESS';

export const getProduct = createRequestThunk(GET_PRODUCT, api.getProduct);

const initialState = null;

const ranking = handleActions(
  {
    [GET_PRODUCT_SUCCESS]: (state, { payload: product }) => {
      return product;
    },
  },
  initialState
);

export default ranking;
