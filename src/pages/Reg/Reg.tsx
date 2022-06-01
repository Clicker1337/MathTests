import s from './Reg.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'


type Props = {}

export const Reg = (props: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Логин не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [middlename, setMiddleName] = useState('')

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

  const nameHandler = (e: any) => {
    setName(e.target.value)
  }
  const lastnameHandler = (e: any) => {
    setLastName(e.target.value)
  }
  const middlenameHandler = (e: any) => {
    setMiddleName(e.target.value)
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
    if (!email || !name || !middlename || !lastname || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }

  });


    function fetchInfo() {
        try {
            axios.post('/', {
              username: email,
              password: password,
              name: name,
              lastname: lastname,
              middlename: middlename
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
            <p className={s.title}>Регистрация</p>

            {(emailDirty && emailError) && <div className={s.errortext}> {emailError} </div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='login' type='text' placeholder='Логин...' />

            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' type='text' placeholder='Имя...' />
            <input onChange={e => lastnameHandler(e)} value={lastname} onBlur={e => blurHandler(e)} name='lastname' type='text' placeholder='Фамилия...' />
            <input onChange={e => middlenameHandler(e)} value={middlename} onBlur={e => blurHandler(e)} name='middlename' type='text' placeholder='Отчество...' />

            {(passwordDirty && passwordError) && <div className={s.errortext}> {passwordError} </div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Пароль...' />

            <button onClick={fetchInfo} disabled={!formValid} className={s.button}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  )
}