//import { HOME_LIST_REQUEST, HOME_LIST_SUCCESS, HOME_LIST_FAIL, HOME_DETAILS_REQUEST, HOME_DETAILS_SUCCESS, HOME_DETAILS_FAIL } from "../constants/HomeConstants";
export const homeListReducer = (state = {homes: [] }, action) => {
    switch (action.type) {
        case "HOME_LIST_REQUEST":
            return { loading: true, homes: [] }
        case "HOME_LIST_SUCCESS":
            return { loading: false, homes: action.payload }
        case "HOME_LIST_FAIL":
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const homeDetailsReducer = (state = {apartment: [{}] }, action) => {
    switch (action.type) {
        case "HOME_DETAILS_REQUEST":
            return { loading: true, ...state }
        case "HOME_DETAILS_SUCCESS":
            return { loading: false, apartment: action.payload }
        case "HOME_DETAILS_FAIL":
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}