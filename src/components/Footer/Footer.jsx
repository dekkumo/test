import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import cl from './Footer.module.scss'
import classNames from 'classnames'
import Navigation from '../Navigation/Navigation'

const Footer = () => {

  const location = useLocation()

  const links = {
    main: 'Главная',
    about: 'О нас',
    auction: 'Торги и аукционы',
    doc: 'Документы',
    contact: 'Контакты'
  }

  return (
    <footer className={cl.footer}>
      <div className="_container">
        <div className={cl.footer_body}>
          {location.pathname === '/' ?
            <div className={cl.image}>
              <img src="icons/logo.png" alt="picture" />
            </div> : 
            <div className={classNames(cl.image, cl.image_opacity)}>
              <img src="icons/logo-gray.png" alt="picture" />
            </div>
          }
          <div className={cl.text_container}>
            <div className={cl.body_link}>
              <Navigation links={links} />
            </div>
            <div className={cl.text}>© 2023 ООО «Тестовая компания». Все права защищены.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer