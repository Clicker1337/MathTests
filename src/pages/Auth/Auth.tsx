import s from './Auth.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { InfoService } from './AxiosRes'


type Props = {}

export const Auth = (props: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Логин не может быть пустым')
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
    setEmailError("")
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


    function fetchInfo() {
        try {
            axios.post('/', {
              login: email,
              password: password
            })
        } catch (e) {
            alert(e)
        }
    }

  return (
    <div className={s.auth}>
      <div className={s.wrapper}>
        <div className={s.form}>
          <div className={s.data}>
            <p className={s.title}>Вход</p>

            {(emailDirty && emailError) && <div className={s.errortext}> {emailError} </div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Логин...' />

            {(passwordDirty && passwordError) && <div className={s.errortext}> {passwordError} </div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль...' />

            <button onClick={fetchInfo} disabled={!formValid} className={s.button}>Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}