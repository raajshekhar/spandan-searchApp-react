
import { combineReducers } from 'redux';
import suggestionData from './suggestionData'

/**
 * combined reducers will be used to implement different reducers for respective functionalities
 */
const reducer = combineReducers({
    suggestions: suggestionData
});

export default reducer;