import React, { useEffect, useContext, useState, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
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
import * as _ from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  const [nowLoading, setNowLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  useEffect(() => {
    const user = auth.currentUser
    if (!user) {
      router.push('/login')
      return
    }
    (async () => {
      // 投稿データを取得する
      await dispatch(readMemberPosts(user.uid))
      setNowLoading(false)
    })()
  }, [])

  const posts = useSelector((state: State) => {
    return _.map(
      state.memberPosts,
      (post, i): PostDisplay => {
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
                      {image && <img src={image} width="100px" />}
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
                    Router.push(`${URL.MEMBER_POSTS}/${post.id}`)
                  }}
                  value="変更"
                />
              </TableRowColumn>
            </TableRow>
          )
        })}
      </>
    )
  }

  if (nowLoading) {
    return <>Loading...</>
  }
  return (
    <Layout title="投稿一覧">
      <section>
        {
          //<!-- パンくず -->
        }
        <nav className="breadcrumb">
          <ul>
            <li>
              <Link href={URL.HOME}>
                <a>
                  <FontAwesomeIcon icon="home" />
                  <span>HOME</span>
                </a>
              </Link>
            </li>
            <li>マイページ</li>
          </ul>
        </nav>
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
