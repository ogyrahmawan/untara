import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducer from '../reducers/index'

const Store = createStore(allReducer, applyMiddleware(thunk))

export default Store