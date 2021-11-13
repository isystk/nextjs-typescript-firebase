import React, { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAuth } from '@/utilities/firebase'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const SignUp: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      user && router.push('/')
    })
  }, [])

  const createUser = async (e) => {
    e.preventDefault()
    try {
      await getAuth().createUserWithEmailAndPassword(email, password)
      router.push('/login')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <Layout title="ログイン">
      <section>
        <div className="entry-header">
          <h1 className="entry-title">ログイン</h1>
        </div>
        <div className="entry-content">
          <div className="wrapper">
            <form className="auth" onSubmit={createUser}>
              <div>
                <label htmlFor="email" className="auth-label">
                  メールアドレス:{' '}
                </label>
                <input
                  id="email"
                  className="auth-input"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="auth-label">
                  パスワード:{' '}
                </label>
                <input
                  id="password"
                  className="auth-input"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <RaisedButton
                label="会員登録"
                type="submit"
                style={{
                  margin: 20,
                }}
              />
            </form>
            <Link href={URL.LOGIN}>
              <a className="auth-link">ログインはこちら</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SignUp
