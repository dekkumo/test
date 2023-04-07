import React, { useState } from 'react'
import Table from '../Table/Table'
import Title from '../Title/Title'
import cl from './Documents.module.scss'

const Documents = () => {

  const title = 'Документы'

  const rows = [
    {
      name: 'Наименование документа',
      date2: '29.04.2022 14:00',
      source: 'Подробнее'
    },
    {
      name: 'Наименование документа',
      date2: '29.04.2022 14:00',
      source: 'Подробнее'
    },
    {
      name: 'Наименование документа',
      date2: '29.04.2022 14:00',
      source: 'Подробнее'
    }
  ]

  const headerRow = [
    {
      name: 'Наименование документа',
      date2: 'Дата размещения',
      source: 'Источник'
    }
  ]

  return (
    <div className={cl.document_body}>
      <div className="_container">
        <div className={cl.info_container}>
          <Title title={title} />
          <Table rows={rows} headerRow={headerRow} />
        </div>
      </div>
    </div>
  )
}

export default Documents