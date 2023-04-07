import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cl from './Navigation.module.scss'

const Navigation = ({links}) => {

  const nav = [
    {path: '/', content: links.main},
    {path: '/aboutus', content: links.about},
    {path: '/auction', content: links.auction},
    {path: '/document', content: links.doc},
    {path: '/contact', content: links.contact}
  ]

  return (
    <>
      {
        nav.map(el => (
          <NavLink className={({isActive}) => (isActive ? cl.active : '')} to={el.path}><a className={cl.link}>{el.content}</a></NavLink> 
        ))
      }
    </>
  )
}

export default Navigation