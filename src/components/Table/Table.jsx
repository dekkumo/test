import React from 'react'
import cl from './Table.module.scss'
import classNames from 'classnames'
import Row from '../Row/Row'

const Table = ({rows, headerRow}) => {

  return (
    <div className={cl.table_block}>
      {
        headerRow.map(el => (
          <div className={cl.row_main}>
            <div className={cl.main_container}>
            <div className={cl.row_title}>{el.name}</div>
          </div>
            {el.date1 ? 
            <div className={cl.container_title}>
              <div className={classNames(cl.row_title, cl.row_titleOne)}>{el.date1}</div>
              <div className={classNames(cl.row_title, cl.row_titleTwo)}>{el.date2}</div>
              <div className={cl.row_title}>{el.source}</div>
            </div>
            :
            <div className={cl.container_title}>
              <div className={classNames(cl.row_title, cl.row_documentTwo)}>{el.date2}</div>
              <div className={cl.row_title}>{el.source}</div>
            </div>}
          </div>
        ))
      }
      <div className={cl.child_container}>
        {
          rows.map(el => (
            <Row el={el} />
          ))
        }
      </div>
    </div>
  )
}

export default Table