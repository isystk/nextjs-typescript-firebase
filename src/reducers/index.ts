import { combineReducers } from 'redux'
import posts from './posts'
import memberPosts from './memberPosts'
import parts from './parts'

export default combineReducers({
  posts,
  memberPosts,
  parts,
})
