import React, { ReactNode, useState, useEffect } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import * as _ from "lodash";
import { URL } from "../common/constants/url";
import CommonHeader from "./common/common_header";
import CommonFooter from "./common/common_footer";

import Link from 'next/link'
import Head from 'next/head'

import { authCheck, authLogout } from "../actions";

type Props = {
  children?: ReactNode
  title?: string
  parts?: any
  authCheck?: any
  authLogout?: any
}

const Layout = ({ children, title = 'Isystk&rsquo;s Frontend SampleThis is the default title',
parts, authCheck, authLogout }: Props) => {
  
  useEffect(() => {
    // ログインチェック
    authCheck();
  }, []);
  
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="このアプリケーションは、ReactJS・Gulp・Webpack・Typescriptを利用しています。" />
        <meta name="keywords" content="ReactJS,Gulp,Webpack,Typescript" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CommonHeader />

      {// ナビゲーション（PC用）
      }
      <div id="pc-menu">
        <div className="wrapper">
          <nav>
            <ul>
              <li><Link href={URL.HOME}>HOME</Link></li>
              <li><Link href={URL.MEMBER}>マイページ</Link></li>
              <li>{ async () => {
                await authLogout();
                location.reload();
              }}</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="contents">
        <div className="wrapper">
          { children }
        </div>
      </div>

      <CommonFooter />
    </React.Fragment>
)
}

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.parts,
    auth: state.auth
  };
};

const mapDispatchToProps = { authCheck, authLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
