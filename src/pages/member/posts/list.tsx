import React, { useEffect, useContext, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import { getAuth } from '@/utilities/firebase'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { readMemberPosts } from '@/actions'
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import moment from 'moment'

import { Data, Post } from '@/store/StoreTypes'
import { AuthContext } from '@/auth/AuthProvider'
type State = {
  memberPosts: Data<Post>[]
}
type PostDisplay = Post & {
  id: string
  regist_data_yyyymmdd: string
}

const MemberPostsList: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext)
  const dispatch = useDispatch()
  useEffect(() => {
    const user = auth.currentUser
    if (!user) {
      router.push('/login')
      return
    }
    // 投稿データを取得する
    dispatch(readMemberPosts(user.uid))
  }, [])

  const posts = useSelector((state: State) => {
    if (state.memberPosts.length === 0) return
    return state.memberPosts.map(
      (post): PostDisplay => {
        const data: Post = post.data
        return {
          id: post.id,
          ...data,
          regist_data_yyyymmdd: moment(data.regist_datetime).format(
            'YYYY/MM/DD HH:mm'
          ),
        }
      }
    )
  })

  const renderPosts = (): JSX.Element => {
    const photoStyle = {
      display: 'flex',
      flexDirection: 'row',
    }
    return (
      <>
        {(posts || []).map((post) => {
          return (
            <TableRow key={post.id}>
              <TableRowColumn width="120px">{post.id}</TableRowColumn>
              <TableRowColumn width="100px">{post.title}</TableRowColumn>
              <TableRowColumn>
                <div style={photoStyle as React.CSSProperties}>
                  {[post.photo].map((image, index) => (
                    <span style={{ marginLeft: '10px' }} key={`image${index}`}>
                      <img src={image} width="100px" />
                    </span>
                  ))}
                </div>
              </TableRowColumn>
              <TableRowColumn width="100px">
                {post.regist_data_yyyymmdd}
              </TableRowColumn>
              <TableRowColumn width="100px">
                <input
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    Router.push(`${URL.MEMBER_POSTS}/p${post.id}`)
                  }}
                  value="詳細"
                />
              </TableRowColumn>
            </TableRow>
          )
        })}
      </>
    )
  }

  return (
    <Layout title="投稿一覧">
      <section>
        <div className="entry-header">
          <h1 className="entry-title">投稿一覧</h1>
        </div>
        <div className="entry-content">
          <p>
            <input
              type="button"
              onClick={(e) => {
                e.preventDefault()
                Router.push(URL.MEMBER_POSTS_NEW)
              }}
              value="新規登録"
            />
          </p>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableRowColumn width="120px">ID</TableRowColumn>
                <TableRowColumn width="100px">タイトル</TableRowColumn>
                <TableRowColumn>画像</TableRowColumn>
                <TableRowColumn width="100px">投稿日時</TableRowColumn>
                <TableRowColumn width="100px">
                  <br />
                </TableRowColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>{renderPosts()}</TableBody>
          </Table>
        </div>
      </section>
    </Layout>
  )
}

export default MemberPostsList
