import React, { useEffect, useContext, FC } from 'react'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { AuthContext } from '@/auth/AuthProvider'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MemberPostsForm from '@/components/pages/Member/Posts/MemberPostsForm'

const MemberPostsNew: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext)

  useEffect(() => {
    const user = auth.currentUser
    if (!user) {
      router.push(URL.LOGIN)
      return
    }
  }, [])

  return (
    <Layout title="投稿登録">
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
            <li>
              <Link href={URL.MEMBER}>
                <a>
                  <span>マイページ</span>
                </a>
              </Link>
            </li>
            <li>投稿登録</li>
          </ul>
        </nav>
        <div className="entry-header">
          <h1 className="entry-title">投稿登録</h1>
        </div>
        <div className="entry-content">
          <MemberPostsForm userId={auth.currentUser.uid} />
        </div>
      </section>
    </Layout>
  )
}

export default MemberPostsNew
