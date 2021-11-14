import React, { useState, useEffect } from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import * as _ from 'lodash'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getPost } from '@/actions'
import { Post } from '@/store/StoreTypes'
import { URL } from '@/common/constants/url'
import { Slider } from '@/components/common/Slider'
import Modal from '@/components/common/Modal'
import SnsShare from '@/components/common/SnsShare'
import { useRouter } from 'next/router'
import moment from 'moment'
import { API_ENDPOINT } from '@/common/constants/api'

// for ssg
import fetch from 'node-fetch'
import https from 'https'
const agent = new https.Agent({
  rejectUnauthorized: false,
})

// ↓ 表示用のデータ型
interface IProps {
  post: Post
  getPost
  match
  history
}

interface IState {}

const PostsShow = (props: IProps) => {
  const router = useRouter()
  const [id, setId] = useState()

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
      if (id) await props.getPost(id)
    }
    f()
  }, [id])

  const { data = initialState } = props

  return (
    <Layout title={data.title}>
      <main>
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
              <li>{data && data.title}</li>
            </ul>
          </nav>

          <div className="entry-header">
            <h1 className="entry-title">{data && data.title}</h1>
            <div className="article-img">
              <Slider>
                {data &&
                  _.map([data.photo], (e, index) => (
                    <img alt="sample1" width="644" src={e} key={index} />
                  ))}
              </Slider>
            </div>
            <div className=" clearfix"></div>
          </div>
          <div className="entry-content">
            <p>{data && data.description}</p>
          </div>
          <div className="clearfix"></div>
          <div className="entry-meta">
            <FontAwesomeIcon icon="clock" />
            {data && data.registTimeMMDD}
          </div>

          <SnsShare />
        </section>
      </main>
      <Modal>
        <SnsShare title={data.title} url={`${URL.POSTS}/${id}`} />
      </Modal>
    </Layout>
  )
}

const initialState: Post = {
  postId: '',
  userId: '',
  title: '',
  description: '',
  regist_datetime: null,
  photo: '',
}

const mapStateToProps = (state, ownProps) => {
  const post = state.posts || initialState
  post.data = post.data || {}
  post.data = {
    ...post.data,
    regist_datetime_yyyymmdd: post.data.regist_datetime
      ? moment(post.data.regist_datetime).format('YYYY/MM/DD')
      : '',
  }
  return {
    ...post,
  }
}

const mapDispatchToProps = { getPost }

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow)

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

// export default PostsShow

/** ここまでSSGでビルドする場合の設定 */
