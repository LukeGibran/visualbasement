import { DataActionTypes } from './data.types';

export const getAllData = () => async (dispatch) => {
  try {

    const res = await fetch('https://vb-react-exam.netlify.app/api/form');

    const data = await res.json();

    dispatch({
      type: DataActionTypes.GET_ALL_DATA,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: DataActionTypes.DATA_ERROR,
      payload: err,
    });
  }
};

export const updateData = (dataObject) => async (dispatch) => {
  try {
    const res = await fetch('https://vb-react-exam.netlify.app/api/form', {
      method: 'POST',
      body: JSON.stringify(dataObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: DataActionTypes.UPDATE_DATA,
      payload: data.data,
    });
  } catch (err) {
    console.log(err)
    dispatch({
      type: DataActionTypes.DATA_ERROR,
      payload: err,
    });
  }
};

export const setLoading = () => ({
    type: DataActionTypes.SET_LOADING
})
