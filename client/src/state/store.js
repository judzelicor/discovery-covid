import { 
    createStore, 
    combineReducers 
} from "redux";
import {
    countryStatisticsReducer,
    worldStatisticsReducers,
    searchQueryReducer,
    uiReducer
} from "../reducers";

export const store = createStore(combineReducers({
    countryStatistics: countryStatisticsReducer,
    worldStatistics: worldStatisticsReducers,
    searchQuery: searchQueryReducer,
    UI: uiReducer
}));