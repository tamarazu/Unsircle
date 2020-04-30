const initialStatus = {
    loading: false,
    error: null,
    page: ''
}

const reducers = (state = initialStatus, action) => {
    switch (action.type) {
        case "SET_LOADING": 
            return {
                ...state,
                loading: action.payload
            }
        case "SET_ERROR": 
            return {
                ...state,
                error: action.payload
            }
        case "SET_PAGE": 
            return {
                ...state,
                page: action.payload
            }
        default:
            return state;
    }
}

export default reducers