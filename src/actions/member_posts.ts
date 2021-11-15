import { Action } from 'redux'
import { Dispatch } from 'redux'
import { API_ENDPOINT } from '@/common/constants/api'
import { API } from '@/utilities'
import { Data, Post } from '@/store/StoreTypes'

//  アクションは『何か』が起こった時、Storeに『どんなデータ』を利用するかということを定義します。
//  ActionCreatorであるstore.dispatch()を使ってStoreに送信しますが、storeについてはこの記事の最後にまとめています。(※ こちら)
//  ただし、アプリケーションの状態がどのように変化するかはここでは指定しません。(→Reducerがやること)
//  あくまでどんな挙動があるかだけを定義します。
export interface MemberPostsAppAction extends Action {
  response: Data<Post>[]
  id: number
}

export const READ_MEMBER_POSTS = 'READ_MEMBER_POSTS'
export const READ_MEMBER_POST = 'READ_MEMBER_POST'
export const CREATE_MEMBER_POST = 'CREATE_MEMBER_POST'
export const UPDATE_MEMBER_POST = 'UPDATE_MEMBER_POST'
export const DELETE_MEMBER_POST = 'DELETE_MEMBER_POST'

export const readMemberPosts = (userId: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  const response = await API.get(`${API_ENDPOINT.POSTS}?userId=${userId}`)
  dispatch({ type: READ_MEMBER_POSTS, response })
}

export const getMemberPost = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  const response = await API.get(`${API_ENDPOINT.POSTS}/p${id}`)
  dispatch({ type: READ_MEMBER_POST, response })
}

export const postMemberPost = (values: any) => async (
  dispatch: Dispatch
): Promise<void> => {
  const response = await API.post(`${API_ENDPOINT.POSTS}/new`, values)
  dispatch({ type: CREATE_MEMBER_POST, response })
}

export const putMemberPost = (values: any) => async (
  dispatch: Dispatch
): Promise<void> => {
  const response = await API.put(
    `${API_ENDPOINT.POSTS}/p${values.postId}/edit`,
    values
  )
  dispatch({ type: UPDATE_MEMBER_POST, response })
}

export const deleteMemberPost = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  await API.del(`${API_ENDPOINT.POSTS}/p${id}/delete`)
  dispatch({ type: DELETE_MEMBER_POST, id })
}
