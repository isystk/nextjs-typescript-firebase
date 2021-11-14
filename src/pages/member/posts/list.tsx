import React, { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAuth } from '@/utilities/firebase'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
const PostsList: FC = () => {
  const router = useRouter()

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      !user && router.push('/login')
    })
  }, [])

  return (
    <Layout title="投稿一覧">
      <section>
        <div className="entry-header">
          <h1 className="entry-title">投稿一覧</h1>
        </div>
        <div className="entry-content"></div>
      </section>
    </Layout>
  )
}

export default PostsList
