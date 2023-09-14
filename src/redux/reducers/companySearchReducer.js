import { SEARCH } from "../actions";

const initialState = {
  content: [],
};

const companySearchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default companySearchReducers;
