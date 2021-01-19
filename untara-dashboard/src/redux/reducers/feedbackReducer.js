const initialState = {
    data: [],
    loading: false
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETFEEDBACKDATA':
            return {...state, data: action.payload}
            case 'SETPFEEDBACKLOADING':
                return {...state, loading: true}
            case 'DONEFEEDBACKLOADING' :
                return {...state, loading: false}
        default:
            return state
    }
}

export default feedbackReducer