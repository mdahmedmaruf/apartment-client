import axios from "axios";
import { HOME_DETAILS_FAIL, HOME_DETAILS_REQUEST, HOME_DETAILS_SUCCESS, HOME_LIST_FAIL, HOME_LIST_REQUEST, HOME_LIST_SUCCESS } from "../constants/HomeConstants";


export const listHomes = () => async (dispatch) => {
    try {
        dispatch({ type: HOME_LIST_REQUEST })

        const { data } = await axios.get("https://immense-scrubland-81187.herokuapp.com/all-house")

        dispatch({
            type: HOME_LIST_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: HOME_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const listHomeDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: HOME_DETAILS_REQUEST })

        const { data } = await axios.get(`https://immense-scrubland-81187.herokuapp.com/exact-apartment/${id}`)

        dispatch({
            type: HOME_DETAILS_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: HOME_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}