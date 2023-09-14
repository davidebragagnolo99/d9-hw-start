import { JOB } from "../actions";

const initialState = {
  content: [],
};

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case JOB:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducers;
