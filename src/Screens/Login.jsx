import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';



export default function Login() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const passwordChanged         = e => setPassword(e.target.value)
  const emailChanged            = e => setEmail(e.target.value)
  
  useEffect(()=>{
    document.title += " | Login"
  },['title'])

  async function loginUser(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
     
      })
    })
    
    const data = await res.json()
    console.log(data)
    
    if(data.status === 200){
      localStorage.setItem('token', data.result.token)
      window.location.href = '/profile'
    } else {
      alert('please check your username and password')
    }
    console.log(data)
  }



  

  return (

  <div className='container-center'>
          <div className='form-wrapper'>
      <div id='form-container'>
    <h1>Login</h1>

      <form onSubmit={loginUser}>
    
            <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={email}
                onChange={emailChanged}
        /> <br></br>
  
       
            <input
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                value={password}
                onChange={passwordChanged}
            /> <br></br>

        <input type="submit" value="Login" />
      </form>
      <p><i>Don't have an account?</i></p><Link to="/register"><em className='emLink'>Register here</em></Link>
       </div>
       </div>

  </div>
  )
}
