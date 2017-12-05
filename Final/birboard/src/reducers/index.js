import { combineReducers } from 'redux'
import comments from './comments'
import images from './images'

export default combineReducers({
  images,
  comments
});