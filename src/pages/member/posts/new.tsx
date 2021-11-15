import React, { useEffect, useContext, FC } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'

import { Data, Post } from '@/store/StoreTypes'
import {AuthContext} from "@/auth/AuthProvider";
import { Input, Textarea } from "@/components/elements/Input";

import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

type state = {
  memberposts: data<post>[]
}

const MemberPostsNew: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext);

  const dispatch = useDispatch()
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push(URL.LOGIN)
      return
    }
  }, [])

  const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
    },
  }))

  const initialValues = {
    title: "",
    description: "",
  }

  let validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  })
  const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
      <Layout title="投稿登録">
        <section>
          <div className="entry-header">
            <h1 className="entry-title">投稿登録</h1>
          </div>
          <div className="entry-content">
            <Grid container justify="center" spacing={1}>
              <Grid item md={12}>
                <Card className={classes.padding}>
                  <CardHeader title="投稿する記事内容を入力してください。"></CardHeader>
                  <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}>
                    {({ dirty, isValid, values, handleChange, handleBlur }) => {
                      return (
                          <Form>
                            <CardContent>
                              <Grid item container spacing={1} justify="center">
                                <Grid item xs={12} sm={6} md={12}>
                                  <Input
                                      label="タイトル"
                                      name="title"
                                      type="text"
                                      value={values.title}
                                  />
                                </Grid>
                                <Grid item xs={12} sm={6} md={12}>
                                  <Textarea
                                      label="本文"
                                      name="description"
                                      value={values.description}
                                  />
                                </Grid>

                                <Grid item xs={12} sm={6} md={6}>
                                </Grid>

                              </Grid>
                            </CardContent>
                            <CardActions>
                              <Button
                                  disabled={!dirty || !isValid}
                                  variant="contained"
                                  color="primary"
                                  type="Submit"
                                  className={classes.button}>
                                登録する
                              </Button>
                            </CardActions>
                          </Form>
                      )
                    }}
                  </Formik>
                </Card>
              </Grid>
            </Grid>
          </div>
        </section>
      </Layout>
  )
}

export default MemberPostsNew
