import React, { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAuth } from '@/utilities/firebase'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'

import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
const Login: FC = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            user && router.push('/')
        })
    }, [])

    const logIn = async (e) => {
        e.preventDefault()
        try {
            await getAuth().signInWithEmailAndPassword(email, password)
            router.push('/')
        } catch (err) {
            alert(err.message)
        }
    }

    const style = {
        margin: 20,
    }
    return (
        <Layout title="ログイン">
            <section>
                <div className="entry-header">
                    <h1 className="entry-title">ログイン</h1>
                </div>
                <div className="entry-content">
                    <form className="auth" onSubmit={logIn}>
                        <div>
                            <label htmlFor="email" className="auth-label">
                                Email:{' '}
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
                                Password:{' '}
                            </label>
                            <input
                                id="password"
                                className="auth-input"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <RaisedButton
                            label="ログイン"
                            type="submit"
                            style={style}
                        />
                    </form>
                    <div style={{ margin: '10px 0' }}>
                        <p>
                            <Link href={URL.ENTRY_REGIST}>
                                <a>会員登録</a>
                            </Link>
                        </p>
                        <p>
                            <Link href={URL.ENTRY_REMIND}>
                                <a>パスワードを忘れた方はこちら</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login