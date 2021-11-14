import React, { useEffect } from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import Link from 'next/link'
import Layout from '@/components/Layout'
import * as _ from 'lodash'
import moment from 'moment'
import { URL } from '@/common/constants/url'
import { readPosts, showMv, hideMv } from '@/actions'
import Modal from '@/components/common/Modal'
import SnsShare from '@/components/common/SnsShare'

interface IProps {
  readPosts
  showMv
  hideMv
  posts
}

const renderPosts = (props: IProps) => {
  return _.map(props.posts, (e, i) => (
    <section key={i}>
      <Link href={`${URL.POSTS}/${e.postId}`}>
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

const IndexPage = (props: IProps) => {
  useEffect(() => {
    // すべての投稿データを取得する
    props.readPosts()
    // メインビジュアルを表示する
    props.showMv()

    return () => {
      // メインビジュアルを非表示にする
      props.hideMv()
    }
  }, [])

  return (
    <Layout title="Isystk&rsquo;s Frontend Sample">
      <main>
        <div className="archive-top">
          <h1>投稿一覧</h1>
          <p></p>
          <p>すべてのユーザーの投稿を一覧で表示しています。</p>
        </div>
        <div className="box-list">{renderPosts(props)}</div>
      </main>
      <Modal>
        <SnsShare title="Isystk&rsquo;s Frontend Sample" url={URL.HOME} />
      </Modal>
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: _.map(state.posts, function (e) {
      const data = e.data || {}
      return {
        postId: e.id,
        ...e.data,
        regist_datetime_yyyymmdd: data.regist_datetime
          ? moment(data.regist_datetime).format('YYYY/MM/DD')
          : '',
      }
    }),
  }
}

const mapDispatchToProps = { readPosts, showMv, hideMv }

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
