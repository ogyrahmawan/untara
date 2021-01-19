import {combineReducers} from 'redux'
import feedbackReducer from "./feedbackReducer"
import productReducer from './productReducer'


const allReducer = combineReducers({
    feedback: feedbackReducer,
    product: productReducer
})

export default allReducer