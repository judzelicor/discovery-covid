const INITIAL_STATE = {
    query_string: ""
}

export default function searchQueryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "NEW@SEARCH_QUERY":
            return {
                ...state,
                query_string: action.payload
            }

        default:
            return state;
    }
}