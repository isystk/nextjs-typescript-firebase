import React, { ReactNode } from 'react'
import { User } from 'firebase'
import { URL } from '@/common/constants/url'
import Header from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
import Link from 'next/link'
import Head from 'next/head'

import { useState } from 'react'
import { useEffect } from 'react'
import { getAuth } from '@/utilities/firebase'
import { FC } from 'react'
import { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
  parts?: any
  auth?: any
  authCheck?: any
  authLogout?: any
  closeMenu?: any
}

const Layout: FC = ({
  children,
  title = 'Isystk&rsquo;s Frontend Sample',
  auth,
  authCheck,
  authLogout,
}: Props) => {
  const router = useRouter()

  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  const isShowLoading = false

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  const logoutLink = (props: Props): JSX.Element => {
    if (currentUser) {
      return (
        <a
          onClick={() => {
            getAuth().signOut()
            router.push('/login')
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

  return (
    <>
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
      <Header />

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
      {isShowLoading && (
        <div id="site_loader_overlay">
          <div className="site_loader_spinner"></div>
        </div>
      )}
    </>
  )
}

export default Layout
