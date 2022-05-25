import s from './Auth.module.scss'
import Button from '../Home/Components/Buttons/ButtonHeader'
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'


type Props = {}


export default class PersonList extends React.Component {

}



export const Auth = (props: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'password':
        setPasswordDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
    }
  }

  const emailHandler = (e: any) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (e: any) => {
    setPassword(e.target.value)
    if (e.target.value.length <= 3) {
      setPasswordError('Пароль должен быть длиннее 3 символов')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  }, [emailError, passwordError]);

  const [switcher, setSwitcher] = useState(false)

  function buttonClicked() {
    setSwitcher(true);
  }

  useEffect(() => {
    if (switcher == true) {
      axios.post('', email)
      .then(response => {
        console.log(response);
        console.log("кнопка была нажата и функция прошла");
        console.log(response.data);
      })
    }
  }, []);

  return (
    <div className={s.auth}>
      <div className={s.wrapper}>
        <div className={s.form}>
          <div className={s.data}>
            <p className={s.title}>Вход</p>

            {(emailDirty && emailError) && <div className={s.errortext}> {emailError} </div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Email...' />

            {(passwordDirty && passwordError) && <div className={s.errortext}> {passwordError} </div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль...' />

            <button onClick={buttonClicked} disabled={!formValid} className={s.button}>Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}