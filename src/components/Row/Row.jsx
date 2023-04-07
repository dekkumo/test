import React from 'react'
import cl from './Row.module.scss'
import classNames from 'classnames'

const Row = ({el}) => {
  return (
    <div className={cl.row_child}>
      <div className={cl.main_container}>
        <div className={cl.row_text}>{el.name}</div>
      </div>
      {el.date1 ? 
      <div className={cl.container_text}>
        <div className={classNames(cl.row_text, cl.row_textOne)}>{el.date1}</div>
        <div className={classNames(cl.row_text, cl.row_textTwo)}>{el.date2}</div>
        <div className={classNames(cl.row_text, cl.bold)}>{el.source}</div>
      </div>
      :
      <div className={cl.container_text}>
        <div className={classNames(cl.row_text, cl.row_documentTwo_text)}>{el.date2}</div>
        <div className={classNames(cl.row_text, cl.bold)}>{el.source}</div>
      </div>}
    </div>
  )
}

export default Row