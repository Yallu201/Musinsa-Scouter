import { createAction, handleActions } from 'redux-actions';

const TOGGLE = 'theme/TOGGLE';
export const toggle = createAction(TOGGLE);
const initialState = {
  isDark: false,
};
const theme = handleActions(
  {
    [TOGGLE]: (state, action) => ({
      ...state,
      isDark: !state.isDark,
    }),
  },
  initialState
);

export default theme;
