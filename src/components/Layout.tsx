import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import Header from '@/components/pages/Header'
import Footer from '@/components/pages/Footer'
import Head from 'next/head'
import { FC } from 'react'
import { Parts } from '@/store/StoreTypes'
type State = {
  parts: Parts
}
type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC = ({
  children,
  title = 'Isystk&rsquo;s Frontend Sample',
}: Props) => {
  const { isShowLoading } = useSelector((state: State) => state.parts)

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

      <div className="contents">
        <div className="wrapper">{children}</div>
      </div>

      <Footer />
      {isShowLoading && (
        <div id="site_loader_overlay">
          <div className="site_loader_spinner"></div>
        </div>
      )}
    </>
  )
}

export default Layout
