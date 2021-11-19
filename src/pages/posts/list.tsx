import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { readPosts } from '@/actions'
import moment from 'moment'

import { Data, Posts, Post } from '@/store/StoreTypes'
import Link from 'next/link'
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

const PostsList: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readPosts())
  }, [])

  const posts: PostDisplay[] = _.map(
      useSelector((state: State) => state.posts),
      function (e: Data<Post>) {
        const data = e.data
        return {
          id: e.id,
          ...data,
          regist_datetime_yyyymmdd: data.regist_datetime
              ? moment(data.regist_datetime).format('YYYY/MM/DD')
              : '',
        } as PostDisplay
      }
  )

  const renderPosts = () => {
    return _.map(posts, (e, i) => (
        <section key={i}>
          <Link href={`${URL.POSTS}/${e.id}`}>
            <a>
              <div className="entry-header">
                <div className="category_link">{e.tagName}</div>
                <h2 className="entry-title">{e.title}</h2>
                <div className="entry-meta">
                  <span>{e.regist_datetime_yyyymmdd}</span>
                </div>
              </div>
              <div className="entry-content">
                <img
                    alt="sample1"
                    width="300"
                    height="174"
                    src={e.photo}
                    className="attachment-medium size-medium wp-post-image"
                />
                <p>{e.description}</p>
                <div className="clearfix"></div>
              </div>
            </a>
          </Link>
        </section>
    ))
  }

  return (
      <Layout title="Isystk&rsquo;s Frontend Sample">
        <section>
          <div className="entry-header">
            <h1 className="entry-title">HOME</h1>
          </div>
          <div className="entry-content">
            <p>すべての投稿を一覧表示しています。</p>
            <div className="box-list">{renderPosts()}</div>
          </div>
        </section>
        <Modal>
          <SnsShare title="Isystk&rsquo;s Frontend Sample" url={URL.HOME} />
        </Modal>
      </Layout>
  )
}

export default PostsList
