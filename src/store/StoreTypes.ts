
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
