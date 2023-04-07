import React from 'react'
import { Link } from 'react-router-dom'
import cl from './Main.module.scss'

const Main = () => {
  return (
    <div className={cl.main_body}>
      <div className={cl.image}>
        <img src="img/main.jpg" alt="picture" />
      </div>
      <div className='_container'>
        <div className={cl.body_text}>
          <div className={cl.title_container}>
            <h1 className={cl.main_title}>Компания. <br /> Твердость. <br /> Надежность.</h1>
          </div>
          <Link to='/auction'><button className={cl.main_button}>Перейти к торгам</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Main