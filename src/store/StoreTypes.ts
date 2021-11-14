export interface Consts {
  name?: string
  data?: Const[]
}

export interface Const {
  code: number
  text: string
}

export interface Data<T> {
  id: string
  data: T
}

export interface Post {
  userId: string
  title: string
  description: string
  regist_datetime: Date | null
  photo: string
}

export interface Parts {
  isShowMv: boolean
  isShowOverlay: boolean
  isShowLoading: boolean
  isSideMenuOpen: boolean
}

export interface Auth {
  isLogin: boolean
  familyName?: string
  message?: string
}

export interface User {
  familyName?: string
  name?: string
  familyNameKana?: string
  nameKana?: string
  email?: string
  password?: string
  passwordConf?: string
  sex?: number
  zip?: string
  prefectureId?: number
  area?: string
  address?: string
  building?: string
  tel?: string
  birthday?: Date
}

export interface Remind {
  isValid: boolean
}
