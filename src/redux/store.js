import {createStore,applyMiddleware,combineReducers} from 'redux'
import {logger} from 'redux-logger'
import promise from 'redux-promise-middleware'
import search from './reducers/search'
// middleware
const middleware = applyMiddleware(
    logger,
    promise
)
// reducers
const reducers = combineReducers({
  search
})
// store
const store = createStore(
    reducers,
    middleware
    )

export default store