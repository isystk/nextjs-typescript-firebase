import React, { useEffect, useState, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { getPost } from '@/actions'
import moment from 'moment'

import { Posts, Post } from '@/store/StoreTypes'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from '@/components/pages/Slider'
import * as _ from 'lodash'
import SnsShare from '@/components/widgets/SnsShare'
import Modal from '@/components/widgets/Modal'
type State = {
  posts: Posts
}
type PostDisplay = Post & {
  id: string
  regist_data_yyyymmdd: string
}

const PostsIndex: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [id, setId] = useState('')

  // この部分を追加
  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setId(router.query.id)
    }
  }, [router])

  useEffect(() => {
    // パスの投稿IDから投稿データを取得する
    const f = async () => {
      if (id) await dispatch(getPost(id))
    }
    f()
  }, [id])

  const posts = useSelector((state: State) => state.posts)
  const data = posts[id]?.data || {}
  const post = {
    ...data,
    regist_data_yyyymmdd:
      data.regist_datetime &&
      moment(data.regist_datetime).format('YYYY/MM/DD HH:mm'),
  }

  return (
    <Layout title={post.title}>
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
            <li>{post && post.title}</li>
          </ul>
        </nav>

        <div className="entry-header">
          <h1 className="entry-title">{post && post.title}</h1>
          <div className="article-img">
            <Slider>
              {post &&
                _.map([post.photo], (e, index) => (
                  <img alt="sample1" width="644" src={e} key={index} />
                ))}
            </Slider>
          </div>
          <div className=" clearfix"></div>
        </div>
        <div className="entry-content">
          <p>{post && post.description}</p>
        </div>
        <div className="clearfix"></div>
        <div className="entry-meta">
          <FontAwesomeIcon icon="clock" />
          {post && post.regist_data_yyyymmdd}
        </div>

        <SnsShare title={post.title} url={`${URL.POSTS}/${id}`} />
      </section>
      <Modal>
        <SnsShare title={post.title} url={`${URL.POSTS}/${id}`} />
      </Modal>
    </Layout>
  )
}

/** ここからSSGでビルドする場合の設定 */
// // 投稿IDの一覧を取得
// export async function getStaticPaths() {
//   const res = await fetch(`${API_ENDPOINT.POSTS}`, {agent})
//   const posts = await res.json()
//   const paths = posts.data.map(post => `/posts/${post.postId}`)
//   return { paths, fallback: false }
// }

// // 各投稿データを取得
// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_ENDPOINT.POSTS}/${params.id}`, {agent})
//   const post = await res.json()
//   console.log(post.data[0])
//   return { props: { post: post.data[0] } }
// }

export default PostsIndex
