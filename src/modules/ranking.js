import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from 'lib/createRequestThunk';
import * as api from 'lib/firebaseAPI';
import today, { yesterday } from 'lib/date';

const GET_RANKING = 'ranking/GET_RANKING';
const GET_RANKING_SUCCESS = 'ranking/GET_RANKING_SUCCESS';
const GET_RANKING_FAILURE = 'ranking/GET_RANKING_FAILURE';
const CHANGE_INPUT = 'ranking/CHANGE_INPUT';
const SEARCH = 'ranking/SEARCH';
const SHOW_MORE = 'ranking/SHOW_MORE';

export const getRanking = createRequestThunk(GET_RANKING, api.getRanking);
export const changeInput = createAction(CHANGE_INPUT, input => input);
export const search = createAction(SEARCH, input => input);
export const showMore = createAction(SHOW_MORE);

const initialState = {
  date: today(),
  input: '',
  count: 30,
  list: [],
  origin: [],
  isInit: false,
};

const ranking = handleActions(
  {
    [GET_RANKING_SUCCESS]: (state, { payload: ranking }) => {
      if (state.isInit) return state;
      return { ...state, origin: ranking, list: ranking, isInit: true };
    },
    [GET_RANKING_FAILURE]: (state, { payload: ranking }) => {
      getRanking(yesterday());
      return { ...state, date: yesterday() };
    },
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [SEARCH]: (state, { payload: input }) => ({
      ...state,
      list: state.origin.filter(item => item.name.includes(input) || item.brand.includes(input)),
      count: 100,
    }),
    [SHOW_MORE]: state => ({
      ...state,
      count: state.count < state.list.length ? state.count + 30 : state.count,
    }),
  },
  initialState
);

export default ranking;
