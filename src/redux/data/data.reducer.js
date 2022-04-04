import { DataActionTypes } from './data.types';

const INITIAL_STATE = {
  allData: [],
  isLoading: true,
  errors: null,
  response: null
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DataActionTypes.GET_ALL_DATA:
      return {
        ...state,
        allData: action.payload,
        isLoading: false
      };
    case DataActionTypes.UPDATE_DATA:
      return {
        ...state,
        response: action.payload,
        isLoading: false
      };
    case DataActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DataActionTypes.DATA_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
