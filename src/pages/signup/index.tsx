import React, { useEffect, useState, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAuth } from '@/utilities/firebase'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@material-ui/core'
import {Input, Textarea} from '@/components/elements/Input'

import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'

const SignUp: FC = () => {
  const router = useRouter()

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      user && router.push('/')
    })
  }, [])


  const errorMessage = (message) => <p className="error">{message}</p>
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(errorMessage('メールアドレスを入力してください。')),
    password: Yup.string().required(errorMessage('パスワードを入力してください。')),
  })
  const onSubmit = async (values) => {
    const { email, password } = values
    try {
      await getAuth().createUserWithEmailAndPassword(email, password)
      router.push(URL.HOME)
    } catch (err) {
      alert(err.message)
    }
  }

  const initialValues = {
    email: '',
    password: ''
  }

  return (
    <Layout title="ログイン">
      <section>
        <div className="entry-header">
          <h1 className="entry-title">会員登録</h1>
        </div>
        <div className="entry-content">
          <Grid container justifyContent="center" spacing={1}>
            <Grid item md={12}>
              <Card>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                  {({
                      setFieldValue,
                      dirty,
                      isValid,
                      values,
                      handleChange,
                      handleBlur,
                    }) => {
                    return (
                        <Form>
                          <CardContent>
                            <Grid
                                item
                                container
                                spacing={1}
                                justifyContent="center"
                            >
                              <Grid item xs={12} sm={6} md={12}>
                                <Input
                                    label="メールアドレス"
                                    name="email"
                                    type="text"
                                />
                              </Grid>
                              <Grid item xs={12} sm={6} md={12}>
                                <Input
                                    label="パスワード"
                                    name="password"
                                    type="password"
                                />
                              </Grid>
                            </Grid>
                          </CardContent>
                          <CardActions>
                            <Grid item xs={12} sm={6} md={6}>
                              <Button
                                  disabled={!dirty || !isValid}
                                  variant="contained"
                                  color="primary"
                                  type="Submit"
                              >
                                会員登録する
                              </Button>
                            </Grid>
                          </CardActions>
                        </Form>
                    )
                  }}
                </Formik>
                <CardContent>
                  <Grid
                      item
                      container
                      spacing={1}
                      justifyContent="center"
                  >
                    <Grid item xs={12} sm={6} md={12}>
                      <Link href={URL.LOGIN}>
                        <a>ログインはこちら</a>
                      </Link>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default SignUp
