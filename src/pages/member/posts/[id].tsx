import React, { useEffect, useContext, useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import {
  showLoading,
  hideLoading,
  getMemberPost,
  putMemberPost,
  deleteMemberPost,
} from '@/actions'
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
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  const [post, setPost]: string = useState('')
  useEffect(() => {
    const data = posts[id]?.data || {}
    setPost({
      ...data,
      regist_data_yyyymmdd:
        data.regist_datetime &&
        moment(data.regist_datetime).format('YYYY/MM/DD HH:mm'),
    })
  }, [posts])

  const [photoErrors, setPhotoErrors] = useState([])
  const classes = useStyle()

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
    photo: Yup.string().required(errorMessage('写真を入力してください。')),
  })

  const onSubmit = async (values) => {
    // ローディング表示
    dispatch(showLoading())
    const user = auth.currentUser
    const data = { ...values, user_id: user.uid }
    await dispatch(putMemberPost(id, data))
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
    // ローディング非表示
    dispatch(hideLoading())
  }

  const onDeleteClick = async () => {
    if (!window.confirm('削除します。よろしいですか？')) {
      return false
    }
    // ローディング表示
    dispatch(showLoading())
    await dispatch(deleteMemberPost(id))
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
    // ローディング非表示
    dispatch(hideLoading())
  }

  return (
    <Layout title="投稿変更">
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
            <li>投稿変更</li>
          </ul>
        </nav>
        <div className="entry-header">
          <h1 className="entry-title">投稿変更</h1>
        </div>
        <div className="entry-content">
          <Grid container justifyContent="center" spacing={1}>
            <Grid item md={12}>
              <Card className={classes.padding}>
                <CardHeader title="投稿する記事内容を入力してください。"></CardHeader>
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
                                label="タイトル"
                                name="title"
                                type="text"
                              />
                            </Grid>
                            <Grid item xs={12} sm={6} md={12}>
                              <Textarea label="本文" name="description" />
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
                                    setFieldValue('photo', data.fileData)
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
                                {values.photo && (
                                  <img src={values.photo} width={300} />
                                )}
                              </div>
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Grid item xs={12} sm={6} md={6}>
                            <Button
                              variant="contained"
                              color="secondary"
                              type="Button"
                              className={classes.button}
                              onClick={onDeleteClick}
                            >
                              削除する
                            </Button>
                            <Button
                              disabled={!dirty || !isValid}
                              variant="contained"
                              color="primary"
                              type="Submit"
                              className={classes.button}
                            >
                              登録する
                            </Button>
                          </Grid>
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
