import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from ".";

const initialState = {
  fav: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        fav: {
          ...state.fav,
          content: [...state.content, action.payload],
        },
      };
    case "DELETE_FROM_FAVOURITES":
      return {
        ...state,
        fav: {
          ...state.fav,
          content: state.content.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
