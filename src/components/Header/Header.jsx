import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import cl from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import classNames from 'classnames'
import { SwipeableDrawer } from '@mui/material'

const Header = () => {

  const location = useLocation()

  const links = {
    main: 'Главная',
    about: 'О нас',
    auction: 'Торги',
    doc: 'Документы',
    contact: 'Контакты'
  }

  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
      <header className={cl.header}>
        <div className="_container">
          <div className={cl.body_link}>
            <div className={cl.image}>
            {location.pathname === '/' ? <img src="icons/logo.png" alt="picture" /> : <img src="icons/logo-gray.png" alt="picture" />}
            </div>
            {location.pathname === '/' ? 
            <div className={cl.link_container}>
              <Navigation links={links} />
            </div>
            :
            <div className={classNames(cl.link_container, cl.gray)}>
              <Navigation links={links} />
            </div>}
          </div>
          {location.pathname === '/' ? <div onClick={onOpen} className={cl.menu_burger}>
            <span></span>
          </div> 
          :
          <div onClick={onOpen} className={classNames(cl.menu_burger, cl.menu_gray)}>
            <span></span>
          </div> }
          <SwipeableDrawer 
              open={open}
              onOpen={onOpen}
              onClose={onClose}
              disableScrollLock={true}
              anchor='right'
              className={cl.swipe}
          >
            <div className={cl.link_burger}>
              <Navigation links={links} />
            </div>
          </SwipeableDrawer>
        </div>
      </header>
  )
}

export default Header