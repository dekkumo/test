import React, { useState } from 'react'
import Table from '../Table/Table'
import Title from '../Title/Title'
import cl from './Auction.module.scss'

const Auction = () => {

  const title = 'Торги'

  const rows = [
    {
      name: 'Наименование торга',
      date1: '29.04.2022 14:00',
      date2: '29.04.2022 14:00',
      source: 'Подробнее'
    },
    {
      name: 'Наименование торга',
      date1: '29.04.2022 14:00',
      date2: '29.04.2022 14:00',
      source: 'Подробнее'
    },
    {
      name: 'Наименование торга',
      date1: '29.04.2022 14:00',
      date2: '29.04.2022 14:00',
      source: 'Подробнее'
    }
  ]

  const headerRow = [
    {
      name: 'Наименование торга',
      date1: 'Дата проведения',
      date2: 'Дата размещения',
      source: 'Источник'
    }
  ]

  return (
    <div className={cl.auction_body}>
      <div className="_container">
        <div className={cl.info_container}>
          <Title title={title} />
          <Table rows={rows} headerRow={headerRow} />
        </div>
      </div>
    </div>
  )
}

export default Auction