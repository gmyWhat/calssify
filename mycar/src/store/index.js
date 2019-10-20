import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer, initState } from './reducers/index'
const store = createStore(reducer, initState)

export default store