import React, { useState } from 'react'
import Title from '../Title/Title'
import cl from './Contact.module.scss'

const Contact = () => {

  const title= 'Контакты'
  const text = 'Реквизиты'

  return (
    <div className={cl.contact_body}>
      <div className="_container">
        <div className={cl.text_container}>
          <div className={cl.contact_contact}>
            <Title title={title} />
            <div className={cl.block_contact}>
              <div className={cl.phone_block}>
                <div className={cl.text}>телефон</div>
                <div className={cl.text_info}>+7 (928) 123-45-67</div>
              </div>
              <div className={cl.email_block}>
                <div className={cl.text}>email</div>
                <div className={cl.text_info}>mail@mail.ru</div>
              </div>
            </div>
          </div>
          <div className={cl.contact_details}>
            <Title title={text} />
            <div className={cl.block_details}>
              <div className={cl.text}>ООО «Компания»</div>
              <div className={cl.text}>
                ИНН:	7712345939 <br />
                КПП:	770000000 <br />
                ОГРН:	1100000000537 <br />
                ОКПО:	00092000
              </div>
              <div className={cl.text}>
                Р/с:	50230866500000002811 <br />
                Банк:ПАО «Сбербанк» <br />
                БИК:	586182078 <br />
                К/с:	40846815800000001645
              </div>
              <div className={cl.text}>
                Юридический адрес:	098922, Новосибирская <br /> область, город Наро-Фоминск, шоссе Ладыгина, 04
              </div>
              <div className={cl.text}>Генер. директор:	Петров Иван Сергеевич</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact