// Storeとは、アプリケーションの状態(state)を保持します。
// getState()を介してstateへのアクセスを許可します。
// 状態をdispatch（アクション）によって更新できるようにする。
// subscribe（listener）を介してlistenerを登録します。
// subscribe（listener）によって返された関数を介して、listenerの登録解除を処理します。

import { combineReducers, createStore, ReducersMapObject } from 'redux'

import { PartsReducer } from '@/reducers/parts'
import { PostsReducer } from '@/reducers/posts'
import { MemberPostsReducer } from '@/reducers/memberPosts'

const reducers: ReducersMapObject = {}

declare let window: any

const rootReducer = combineReducers({
  PartsReducer,
  PostsReducer,
  MemberPostsReducer,
})

export default createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
)
