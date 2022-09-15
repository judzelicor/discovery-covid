const INITIAL_STATE = {
    mobileCountriesScrollerIsVisible: false,
    mobileFilterIsVisible: false
}

export default function uiReducer(state = INITIAL_STATE, action) {
    console.log(action.payload)
    switch(action.type) {
        case "TOGGLE@MOBILE_COUNTRIES_SCROLLER":
            return {
                ...state,
                mobileCountriesScrollerIsVisible: action.payload
            }

        case "TOGGLE@MOBILE_FILTER":
            return {
                ...state,
                mobileFilterIsVisible: action.payload
            }

        default:
            return state;
    }
}