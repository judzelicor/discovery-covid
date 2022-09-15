const INITIAL_STATE = {
    active_statistic: "total_cases",
    active_statistic_display: "Total Cases",
    orderBy: "DESC",
    countries: []
}

export default function countryStatisticsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "UPDATE@ORDER":
            return {
                ...state,
                orderBy: action.payload
            }

        case "UPDATE@STATISTIC":
            return {
                ...state,
                active_statistic: action.payload.active_statistic,
                active_statistic_display: action.payload.active_statistic_display
            }

        case "UPDATE@COUNTRIES":
            return {
                ...state,
                countries: [...action.payload]
            }

        default:
            return state;
    }
}