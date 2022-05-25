import React from 'react'
import { Study } from './Components/Study'
import s from './Home.module.scss'

type Props = {}


let text123 = "не пройден"

if (text123 = "lol") {
  text123 = "не пройден"
}

export const Home = (props: Props) => {
  return (
    <div className={s.Home}>
      <div className={s.panel}>

        <div className={s.wrapper}>
          <a href="/" className={s.block}>
          </a>
          <a href="/constructor" className={s.block}>
            <p className={s.title}>Тест: неопределенные интегралы</p>
            <p className={s.indicator}><span> {text123} </span></p>
          </a>
          <a href="/" className={s.block}>
          </a>
        </div>
      </div>

      <div className={s.study}>
        <Study />
      </div>


</div>
  )
}