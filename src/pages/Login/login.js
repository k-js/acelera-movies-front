import { client } from '../../service/client'
import './login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const Login = () => {
  const [data, setData] = useState({
    login: '',
    password: ''
  })

  const handleChange = (e) => {
    if (e.target.id === 'password') {
      setData({
        ...data,
        password: e.target.value
      })
    }
    if (e.target.id === 'email') {
      setData({
        ...data,
        login: e.target.value
      })
    }
  }

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    const { login, password } = data
    client.post('/login', { login, password })
      .then(res => {
        if (res.data.auth) {
          navigate('/home')
        }
      })
      .catch(erro => {
        return alert(erro)
      })
  }

  return (
    <>
     <div className="container">
      <div className="container-form">
      <form method='POST'>
        <div className="inputContainer">
          <label htmlFor="email">Login</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <a href="#">Esqueceu sua senha ?</a>
        <button className="button" onClick={handleClick}>
          Entrar
        </button>
      </form>
      </div>
    </div>
    </>
  )
}
