import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import modal from './modal'

const rootReducer = combineReducers({
  modal,
  form,
})

export default rootReducer
