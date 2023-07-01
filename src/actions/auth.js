import { AUTH } from '../constants/actionTypes';
//import {useNavigate} from 'react-router-dom'
import * as api from '../api/index.js';

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const signin = (formData) => async (dispatch) => {
//     const nav = useNavigate();
//   try {
//     const { data } = await api.signIn(formData);

//     dispatch({ type: AUTH, data });

//     nav('/');
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const signup = (formData) => async (dispatch) => {
//     const nav = useNavigate();
//   try {
//     const { data } = await api.signUp(formData);

//     dispatch({ type: AUTH, data });

//     nav('/');
//   } catch (error) {
//     console.log(error);
//   }
// };