import React, {useEffect, useState, FC} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {URL} from '@/common/constants/url'
import {
  showLoading,
  hideLoading,
  getMemberPost,
  postMemberPost,
  putMemberPost,
  deleteMemberPost,
} from '@/actions'
import {Input, Textarea} from '@/components/elements/Input'

import {Data, Post} from '@/store/StoreTypes'
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@material-ui/core'

import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import ReactImageBase64 from 'react-image-base64'
import moment from 'moment'
type PostDisplay = Post & {
  id: string
  regist_data_yyyymmdd: string
}
type Props = {
  postId?: string
  userId: string
}
type State = {
  memberPosts: Data<Post>[]
}

const PostsForm: FC<Props> = (props: Props) => {
  const {postId, userId, isEdit = (!!postId)} = props;
  const router = useRouter()
  const [nowLoading, setNowLoading] = useState<boolean>(true)

  const dispatch = useDispatch()
  useEffect(() => {
    // パスの投稿IDから投稿データを取得する
    (async () => {
      if (postId) {
        await dispatch(getMemberPost(postId))
        setNowLoading(false)
      } else {
        setNowLoading(false)
      }
    })()
  }, [postId])

  const posts = useSelector((state: State) => state.memberPosts)
  const [post, setPost]: PostDisplay = useState({})
  useEffect(() => {
    const data = posts[postId]?.data || {
      title: '',
      description: '',
      photo: ''
    }
    setPost({
      ...data,
      regist_data_yyyymmdd:
          data.regist_datetime &&
          moment(data.regist_datetime).format('YYYY/MM/DD HH:mm'),
    })
  }, [posts])

  const [photoErrors, setPhotoErrors] = useState([])

  const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
    },
  }))
  const classes = useStyle()

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
    const data = {...values, user_id: userId}
    if (isEdit) {
      await dispatch(putMemberPost(postId, data))
    } else {
      await dispatch(postMemberPost(data))
    }
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
    await dispatch(deleteMemberPost(postId))
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
    // ローディング非表示
    dispatch(hideLoading())
  }

  if (nowLoading) {
    return <>Loading...</>
  }
  return (
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
                            <Textarea label="本文" name="description"/>
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
                                  <img src={values.photo} width={300}/>
                              )}
                            </div>
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Grid item xs={12} sm={6} md={6}>
                          { isEdit && (
                              <Button
                              variant="contained"
                              color="secondary"
                              type="Button"
                              className={classes.button}
                              onClick={onDeleteClick}
                          >
                            削除する
                          </Button>
                          )}
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
  )
}

export default PostsForm