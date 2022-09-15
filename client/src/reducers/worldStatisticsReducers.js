const INITIAL_STATE = {
    summary: [],
    active: "total_cases"
};

export default function worldStatisticsReducers(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "UPDATE@WORLD_SUMMARY_STATISTICS":
            return {
                ...state,
                summary: action.payload
            }

        case "SET@ACTIVE_STATISTIC":
            return {
                ...state,
                active: action.payload
            }

        default:
            return state;
    }
}