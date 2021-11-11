import React, { ReactNode } from 'react'
import { connect } from 'react-redux'
import { URL } from '@/common/constants/url'
import CommonHeader from '@/components/common/common_header'
import CommonFooter from '@/components/common/common_footer'
import Link from 'next/link'
import Head from 'next/head'

import { authCheck, authLogout } from '@/actions'

type Props = {
  children?: ReactNode
  title?: string
  parts?: any
  auth?: any
  authCheck?: any
  authLogout?: any
  closeMenu?: any
}

const logoutLink = (props: Props): JSX.Element => {
  const { auth } = props

  if (auth && auth.isLogin) {
    return (
      <a
        onClick={async () => {
          await props.authLogout()
          location.reload()
        }}
      >
        ログアウト
      </a>
    )
  }
  return (
    <Link href={URL.LOGIN}>
      <a onClick={props.closeMenu}>ログイン</a>
    </Link>
  )
}

const Layout = ({
  children,
  title = 'Isystk&rsquo;s Frontend Sample',
  parts,
  auth,
  authCheck,
  authLogout,
}: Props) => {

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="このアプリケーションは、ReactJS・Gulp・Webpack・Typescriptを利用しています。"
        />
        <meta name="keywords" content="ReactJS,Gulp,Webpack,Typescript" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CommonHeader />

      {
        // ナビゲーション（PC用）
      }
      <div id="pc-menu">
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <Link href={URL.HOME}>HOME</Link>
              </li>
              <li>
                <Link href={URL.MEMBER}>マイページ</Link>
              </li>
              <li>{logoutLink({ auth, authCheck, authLogout })}</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="contents">
        <div className="wrapper">{children}</div>
      </div>

      <CommonFooter />
      {parts.isShowLoading && (
        <div id="site_loader_overlay">
          <div className="site_loader_spinner"></div>
        </div>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (state: { parts: any; auth: any }) => {
  return {
    parts: state.parts,
    auth: state.auth,
  }
}

const mapDispatchToProps = { authCheck, authLogout }

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
