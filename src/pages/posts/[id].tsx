import React, { ReactNode, useState, useEffect } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as _ from "lodash";
import Link from 'next/link'
import Layout from "@/components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPost } from "@/actions";
import { Post } from "@/store/StoreTypes";
import { URL } from "@/common/constants/url";
import { SimpleSlider } from "@/components/common/slider";
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

const initialState: Post = {
  postId: null,
  title: '',
  text: '',
  registTimeMMDD: '',
  imageList: [],
  tagList: []
};

const PostsShow = (props) => {

  const router = useRouter()
  const [id, setId] = useState<number>()
  
  // この部分を追加
  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setId(Number(router.query.id));
    }
  }, [router]);

  useEffect(() => {
    // パスの投稿IDから投稿データを取得する
    const f = async () => {
      if (id) await props.getPost(id);
    };
    f();
  }, [id]);
  
  const { post = initialState } = props;

  return (
    <Layout title={post.title} url={`${URL.POSTS}/${id}`}>
      <div className="contents">
        <div className="wrapper">
          <main>
            <section>

              {//<!-- パンくず -->
              }
              <nav className="breadcrumb">
                <ul>
                  <li>
                    <Link href={URL.HOME}>
                      <a><FontAwesomeIcon icon="home" /><span>HOME</span></a>
                    </Link>
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
                      <li key={index}><a href="#" rel="tag">{tag.tagName}</a></li>
                    ))
                  )}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state, ownProps) => {
  const posts = state.posts;
  return {
    post: (posts) ? posts[0] : initialState
  };
};

const mapDispatchToProps = { getPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsShow);
