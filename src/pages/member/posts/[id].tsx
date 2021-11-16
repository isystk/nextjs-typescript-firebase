import React, { useEffect, useContext, useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { getMemberPost, putMemberPost, deleteMemberPost } from '@/actions'
import { AuthContext } from '@/auth/AuthProvider'
import { Input, Textarea } from '@/components/elements/Input'

import { Data, Post } from '@/store/StoreTypes'
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@material-ui/core'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import ReactImageBase64 from 'react-image-base64'
import moment from 'moment'

type State = {
  memberPosts: Data<Post>[]
}

const MemberPostsEdit: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext)
  const [nowLoading, setNowLoading] = useState<boolean>(true)

  const dispatch = useDispatch()
  useEffect(() => {
    const user = auth.currentUser
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

  const [id, setId] = useState('')

  // この部分を追加
  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setId(router.query.id)
    }
  }, [router])

  useEffect(() => {
    // パスの投稿IDから投稿データを取得する
    const f = async () => {
      if (id) {
        await dispatch(getMemberPost(id))
        setNowLoading(false)
      }
    }
    f()
  }, [id])

  const posts = useSelector((state: State) => state.memberPosts)
  const [post, setPost]: {} = useState({})
  useEffect(() => {
    const data = posts[id]?.data || {}
    setPost({
      ...data,
      regist_data_yyyymmdd:
        data.regist_datetime &&
        moment(data.regist_datetime).format('YYYY/MM/DD HH:mm'),
    })
  }, [posts])

  const [photo, setPhoto]: {} = useState({})
  const [photoErrors, setPhotoErrors] = useState([])
  const classes = useStyle()

  useEffect(() => {
    setPhoto(post.photo)
  }, [post])

  if (nowLoading) {
    return <>Loading...</>
  }
  const initialValues = {
    ...post,
  }

  const errorMessage = (message) => <p className="error">{message}</p>
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(errorMessage('タイトルを入力してください。')),
    description: Yup.string().required(
      errorMessage('本文を入力してください。')
    ),
  })

  const onSubmit = (values) => {
    const user = auth.currentUser
    const data = { ...values, photo: photo, user_id: user.uid }
    dispatch(putMemberPost(id, data))
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
  }

  const onDeleteClick = () => {
    dispatch(deleteMemberPost(id))
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
  }

  return (
    <Layout title="投稿変更">
      <section>
        <div className="entry-header">
          <h1 className="entry-title">投稿変更</h1>
        </div>
        <div className="entry-content">
          <Grid container justify="center" spacing={1}>
            <Grid item md={12}>
              <Card className={classes.padding}>
                <CardHeader title="投稿する記事内容を入力してください。"></CardHeader>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
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
                              <ReactImageBase64
                                maxFileSize={10485760}
                                thumbnail_size={100}
                                drop={true}
                                dropText="写真をドラッグ＆ドロップもしくは"
                                capture="environment"
                                multiple={false}
                                handleChange={(data) => {
                                  if (data.result) {
                                    setPhoto(data.fileData)
                                  } else {
                                    setPhotoErrors([
                                      ...photoErrors,
                                      data.messages,
                                    ])
                                  }
                                }}
                              />
                              {photoErrors.map((error, index) => (
                                <p className="error" key={index}>
                                  {error}
                                </p>
                              ))}
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                              <div>
                                <img src={photo} width={300} />
                              </div>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Button
                            disabled={!dirty || !isValid}
                            variant="contained"
                            color="danger"
                            type="Button"
                            className={classes.button}
                            onClick={onDeleteClick}
                          >
                            削除する
                          </Button>
                        </CardActions>
                        <CardActions>
                          <Button
                            disabled={!dirty || !isValid}
                            variant="contained"
                            color="primary"
                            type="Submit"
                            className={classes.button}
                          >
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

export default MemberPostsEdit
