import React, { ReactNode, useState, useEffect } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as _ from "lodash";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPost } from "../../actions";
import { Post } from "../../store/StoreTypes";
import { URL } from "../../common/constants/url";
import { SimpleSlider } from "~/components/common/slider";
import SnsShare from "../../components/common/sns_share";
import { useRouter } from 'next/router'

// ↓ 表示用のデータ型
interface IProps {
  post: Post;
  getPost;
  match;
  history;
}

interface IState {
}

const PostsShow = (props) => {

  const router = useRouter()
  const { id } = router.query
  console.log('hoge', id)
  
  useEffect(() => {
    // パスの投稿IDから投稿データを取得する
    const f = async () => {
      if (id) await props.getPost(id);

      // // TITLEタグを設定
      // document.title = props.post.title;
    };
    f();

  }, []);
  
  const { post } = props;

  return (
    <React.Fragment>
      <div className="contents">
        <div className="wrapper">
          <main>

            <section>

              {//<!-- パンくず -->
              }
              <nav className="breadcrumb">
                <ul>
                  <li>
                    <a href={URL.HOME}>
                      <FontAwesomeIcon icon="home" /><span>HOME</span>
                    </a>
                  </li>
                  <li>
                    {post && post.title}
                  </li>
                </ul>
              </nav>

              <div className="entry-header">
                <h1 className="entry-title">{post && post.title}</h1>
                <div className="article-img">
                  <SimpleSlider>
                    {post && (
                      _.map(post.imageList, (image, index) => (
                        <img alt="sample1" width="644" src={image.imageUrl} key={index} />
                      ))
                    )}
                  </SimpleSlider>
                </div>
                <div className=" clearfix"></div>
              </div>
              <div className="entry-content">
                <p>{post && post.text}</p>
              </div>
              <div className="clearfix"></div>
              <div className="entry-meta">
                <FontAwesomeIcon icon="clock" />
                {post && post.registTimeMMDD}
              </div>
              <div className="entry-tags">
                <div className="section-tag">
                  <ul>
                  <li>タグ： </li>
                  {post && (
                    _.map(post.tagList, (tag, index) => (
                      <li><a href="#" rel="tag" key={index}>{tag.tagName}</a></li>
                    ))
                  )}
                  </ul>
                </div>
              </div>

              <SnsShare />

            </section>

          </main>

        </div>
      </div>

    </React.Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  const router = useRouter()
  const { id } = router.query
  const post = state.posts[id];
  return {
    post
  };
};

const mapDispatchToProps = { getPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsShow);
