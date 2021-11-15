// Reducerは、Stateの状態をデザインして、アクションをハンドリングします。
// また、Reducerは、前の状態とアクションを取り、次の状態を返す純粋な関数です。

import { Posts } from '@/store/StoreTypes'
import { PostsAppAction, READ_POSTS, READ_POST } from '@/actions/index'
import * as _ from 'lodash'
const initialState: Posts = {}

export function PostsReducer(
  state = initialState,
  action: PostsAppAction
): Posts {
  switch (action.type) {
    case READ_POST: {
      const post = action.response
      return { ...state, [post.id]: post }
    }
    case READ_POSTS:
      return _.mapKeys(action.response, 'id')
    default:
      return state
  }

  return state
}

export default PostsReducer
