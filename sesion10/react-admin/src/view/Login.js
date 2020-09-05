import React, { useState } from 'react'
import authFunction from '../auth'
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {

  const {state, setState} = useState()
  const history = useHistory()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } }

  const login = () => {
      authFunction.authenticate(() => {
      history.replace(from)
    })
    
  }

  const logout = () => {
    authFunction.signout(() => {
      history.push("/signout")
    })
  }

  return (
  
    <section>
      <button onClick={login}>Signin</button>
      <button onClick={logout}>Signout</button>
     
    </section>
  ) 
}




export default Login