// 1 - Crie store 
// 2 - Crie o rootReducer
// 3 - Crie os reducers
// 4 - Coloque Provider no seu App

//Base do Redux -  Cria o rootReducer e User Reducer
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './rootReducer.js'

const store = configureStore({ // No campo reducer, add o rootReducer, que contem todos os reducers
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store