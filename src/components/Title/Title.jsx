import React from 'react'
import cl from './Title.module.scss'

const Title = ({title}) => {
  return (
    <h2 className={cl.title}>
      {title}
    </h2>
  )
}

export default Title