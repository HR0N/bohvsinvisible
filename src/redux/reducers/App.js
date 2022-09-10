import {REFRESH_ALL} from "../actions/actionTypes";

const initialState = {
    refresh_all: false,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case REFRESH_ALL: return {...state, refresh_all: action.payload };
        default: return state;
    }
}