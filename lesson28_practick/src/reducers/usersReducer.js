import {GET_USERS} from "../actions/usersActions";

const initialState = {
  usersFromReducer: [],
  isNavOpened: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersFromReducer: action.payload,
      }
    default:
      return state
  }
}