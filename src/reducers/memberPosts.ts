// Reducerは、Stateの状態をデザインして、アクションをハンドリングします。
// また、Reducerは、前の状態とアクションを取り、次の状態を返す純粋な関数です。

import { Post } from '@/store/StoreTypes'
import {
  MemberPostsAppAction,
  READ_MEMBER_POSTS,
  READ_MEMBER_POST,
} from '@/actions/index'

const initialState: Post[] = []

export function MemberPostsReducer(
  state = initialState,
  action: MemberPostsAppAction
): Post[] {
  switch (action.type) {
    case READ_MEMBER_POST:
    case READ_MEMBER_POSTS:
      return action.response
    default:
      return state
  }

  return state
}

export default MemberPostsReducer
