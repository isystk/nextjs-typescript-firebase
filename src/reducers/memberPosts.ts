// Reducerは、Stateの状態をデザインして、アクションをハンドリングします。
// また、Reducerは、前の状態とアクションを取り、次の状態を返す純粋な関数です。

import { Posts } from '@/store/StoreTypes'
import {
  MemberPostsAppAction,
  READ_MEMBER_POSTS,
  READ_MEMBER_POST,
  CREATE_MEMBER_POST,
  UPDATE_MEMBER_POST,
  DELETE_MEMBER_POST,
} from '@/actions/index'
import * as _ from 'lodash'
const initialState: Posts = {}

export function MemberPostsReducer(
  state = initialState,
  action: MemberPostsAppAction
): Posts {
  switch (action.type) {
    case READ_MEMBER_POSTS: {
      return _.mapKeys(action.response, 'id')
    }
    case READ_MEMBER_POST:
    case UPDATE_MEMBER_POST:
    case CREATE_MEMBER_POST: {
      const post = action.response
      return { ...state, [post.id]: post }
    }
    case DELETE_MEMBER_POST: {
      const id = action.response
      delete state[id]
      return { ...state }
    }
    default:
      return state
  }

  return state
}

export default MemberPostsReducer
