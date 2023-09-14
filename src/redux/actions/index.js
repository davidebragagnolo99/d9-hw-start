import { useDispatch } from "react-redux";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";
export const JOB = "JOB";
export const SEARCH = "SEARCH";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
const baseEndpoint2 = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const searchAction = (dispatch, query) => {
  return async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchCompanyAction = (companyName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint2 + companyName);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({ type: SEARCH, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
