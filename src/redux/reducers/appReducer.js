import { authenticateMe } from "./authReducer";

const SET_INITIALIZED = "app/SET_INITIALIZED";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

//AC
export const setInitialized = () => ({ type: SET_INITIALIZED });

//TC
export const init = () => async (dispatch) => {
  await dispatch(authenticateMe());

  dispatch(setInitialized());
};

export default appReducer;
