import React, { useEffect, useState, FC } from 'react'
import { User } from 'firebase'
import Link from 'next/link'
import { getAuth } from '@/utilities/firebase'
import { URL } from '@/common/constants/url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '@/components/common/logo'
import { toggleMenu, closeMenu, authLogout } from '@/actions'

const CommonHeader: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  const logoutClick = async () => {
    await authLogout()
    location.reload()
  }

  const logoutLink = (): JSX.Element => {
    if (currentUser) {
      return <a onClick={logoutClick}>ログアウト</a>
    }
    console.log(currentUser)
    return (
      <Link href={URL.LOGIN}>
        <a onClick={closeMenu}>ssss</a>
      </Link>
    )
  }

  // const isSideMenuOpen = parts && parts.isSideMenuOpen
  const isSideMenuOpen = false
  const sideMenuClass = isSideMenuOpen ? 'open' : ''
  const menuBtnClass = isSideMenuOpen ? 'menu-btn on' : 'menu-btn'
  const layerPanelClass = isSideMenuOpen ? 'on' : ''

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <Logo />
          <div className="nav">
            <div className="search">
              <form role="search" method="get" action="#">
                <FontAwesomeIcon className="search-icon" icon="search" />
                <label>
                  <input
                    type="search"
                    placeholder="検索..."
                    defaultValue=""
                    name="s"
                  />
                </label>
              </form>
            </div>
            <div
              className={menuBtnClass}
              onClick={(e) => {
                e.preventDefault()
                toggleMenu()
              }}
            >
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
            <div id="side-menu" className={sideMenuClass}>
              <div className="side-menu-header">
                <div className="search">
                  <form role="search" method="get" action="#">
                    <FontAwesomeIcon className="search-icon" icon="search" />
                    <label>
                      <input
                        type="search"
                        placeholder="検索..."
                        defaultValue=""
                        name="s"
                      />
                    </label>
                  </form>
                </div>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link href={URL.HOME}>
                      <a onClick={closeMenu}>HOME</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={URL.MEMBER}>
                      <a onClick={closeMenu}>マイページ</a>
                    </Link>
                  </li>
                  <li>{logoutLink()}</li>
                </ul>
              </nav>
            </div>
            <div id="layer-panel" className={layerPanelClass}></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default CommonHeader
