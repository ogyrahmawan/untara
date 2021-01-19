const initialState = {
    data: [],
    loading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETPRODUCTDATA':
            return {...state, data: action.payload}
        case 'SETPRODUCTLOADING':
            return {...state, loading: true}
        case 'DONEPRODUCTLOADING' :
            return {...state, loading: false}
        default:
            return state
    }
}

export default productReducer