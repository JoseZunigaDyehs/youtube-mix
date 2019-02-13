import { combineReducers } from "redux";
import { currentUser } from './currentUser';
import { notificationStates } from './notification'
import { trackStates } from './track'
import { searchStates } from "./search"

export const reducers = combineReducers({
    currentUser,
    notificationStates,
    trackStates,
    searchStates
});