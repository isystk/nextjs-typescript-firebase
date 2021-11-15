import React, {useContext, useState,  FC} from 'react'
import Link from 'next/link'
import { URL } from '@/common/constants/url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleMenu, closeMenu, showOverlay } from '@/actions'
import { useRouter } from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {AuthContext} from "@/auth/AuthProvider";
import {Parts} from "@/store/StoreTypes";
import $ from 'jquery'
type State = {
  parts: Parts
}
const Footer: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const auth = useContext(AuthContext);
  const {isSideMenuOpen} = useSelector((state: State) => state.parts);
  const [scrollTop, setScrollTop] = useState(0);
  const handleScroll = (): void => {
    setScrollTop($(window).scrollTop())
  }
  const scrollToTop = (e): void => {
    e.preventDefault()
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      500
    )
  }

  let scrollTopClass = 'link hide'
  if (scrollTop > 100) {
    scrollTopClass = 'link '
  }

  return (
      <>
        <footer className="footer">
          <div className="wrapper">
            <nav className="footer-nav">
              <ul>
                <li>
                  <Link href={URL.HOME}>
                    <a onClick={() => dispatch(closeMenu())}>
                      <FontAwesomeIcon icon="home" />
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        dispatch(showOverlay())
                      }}
                  >
                    <FontAwesomeIcon icon="share-alt" />
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        dispatch(toggleMenu())
                      }}
                  >
                    <FontAwesomeIcon icon="bars" />
                  </a>
                </li>
                <li>
                  <a
                      href="#"
                      className="js-scroll-top"
                      onClick={scrollToTop}
                  >
                    <FontAwesomeIcon icon="chevron-up" />
                  </a>
                </li>
              </ul>
            </nav>
            <section className="follow-links">
              <ul className="menu">
                <li>
                  <a
                      href="https://profile.isystk.com/"
                      target="_blank"
                      rel="noreferrer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                      href="https://github.com/isystk/isystk-frontend-sample"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    Github
                  </a>
                </li>
              </ul>
            </section>
            <section className="copylight">© 2020 isystk&apos;s sample</section>
          </div>
        </footer>
        <span id="page-top" className={scrollTopClass}>
          <a href="#" onClick={scrollToTop}>
            <FontAwesomeIcon icon="chevron-up" />
          </a>
        </span>
      </>
  )
}

export default Footer
