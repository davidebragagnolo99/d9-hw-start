import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducers";
import companySearchReducer from "../reducers/companySearchReducer";

const rootReducers = combineReducers({
  favourites: mainReducer,
  search: searchReducer,
  companySearch: companySearchReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
