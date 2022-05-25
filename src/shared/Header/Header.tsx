import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from './Header.module.scss'
import Button from '../../pages/Home/Components/Buttons/ButtonHeader'

type Props = {}

export const Header = (props: Props) => {
  return (
    <div className={s.shadowblock}>
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <a href="/"><GlobalSvgSelector id={'header-logo'} /></a>

        </div>
        <div className={s.title}>
          Math Tests

        </div>
      </div>
      <div className={s.wrapper}>
        <Button
        className={s.button}
        border="none"
        onClick={() => document.location.href="/auth"}
        radius="none"
        width = "130px"
        children = "Войти"
        />
      </div>

    </header>
    </div>
  )
}
