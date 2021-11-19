import { combineReducers } from 'redux'
import memberPosts from './memberPosts'
// import parts from './parts'
import parts from '../store/slice/parts'
// import posts from './posts'
import posts from '../store/slice/posts'

export default combineReducers({
  posts,
  memberPosts,
  parts,
})
