// 1 - Crie store 
// 2 - Crie o rootReducer
// 3 - Crie os reducers
// 4 - Coloque Provider no seu App

//Base do Redux -  Cria o rootReducer e User Reducer
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer.js'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store