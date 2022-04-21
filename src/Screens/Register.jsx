import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  

  const [firstname, setFirstname]       = useState('')
  const [lastname, setLastname]         = useState('')
  const [email, setEmail]               = useState('')
  const [password, setPassword]         = useState('')
  const [errorFname, setErrorFname]     = useState('')
  const [errorLname, setErrorLname]     = useState('')
  const [errorEmail, setErrorEmail]     = useState('')
  const [errorPswd, setErrorPswd]       = useState('')
  
  const firstnameChanged                = e => setFirstname(e.target.value)
  const lastnameChanged                 = e => setLastname(e.target.value)
  const passwordChanged                 = e => setPassword(e.target.value)
  const emailChanged                    = e => setEmail(e.target.value)
 
  useEffect(()=>{
  document.title += " | Register"
  },[])
  
  // const [error, setError] = useState('')

  useEffect(() => {
    if(firstname.length < 2 ){ 
      setErrorFname('Firstname is to short')
      return;
    }
     else{
      setErrorFname('')
      return;
    } 
  }, [firstname])

  useEffect(() => {
  if(lastname.length < 3){
    setErrorLname('Lastname is to short')
    return;
    }
     else{
      setErrorLname('')
      return;
    }
    
  }, [lastname])
  
  useEffect(() => {
    if(password.length < 4){
      setErrorPswd('Password must be atleast 4 characters')
      return;
    } 
    if(password.length > 8){
      setErrorPswd('Password can\'t be more than 8 characters')
      return;
    } else{
      setErrorPswd('')
      return;
    }
  }, [password])



  async function registerUser(e) {
    e.preventDefault()
    const res = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password
      })
    })
    const data = await res.json()
  
    
    console.log(data)
    if(data.status === 409){
      return setErrorEmail('This user already exists!')
    }
    if(data.status === 200) {
      setErrorEmail('')
      alert('Welcome!')
      window.location.href='/login'
    }
        
  }
  
  return (

  <div className='container-center'>
    <div className='form-wrapper'>
      <div id='form-container'>
    <h1>Register</h1>
      <form onSubmit={registerUser}>
            <input 
                
                type      ="text"
                id        ="firstname"
                name      ="firstname"
                placeholder='First Name'
                value     ={firstname}
                pattern   ='.{3,}'
                onChange  ={firstnameChanged}
                
        />
      <br></br> <small htmlFor="firstname" className='err-msg'><em>{errorFname}</em></small><br></br> 
    

      
            <input 
                type      ="text"
                id        ="lastname"
                name      ="lastname"
                placeholder='Last name'
                value     ={lastname}
                pattern   ='.{3,}'
                onChange  ={lastnameChanged}
            /> 
           <br></br> <small htmlFor="lastname" className='err-msg'><em>{errorLname}</em></small><br></br> 

            <input
                type        ="email"
                id          ="email"
                name        ="email"
                placeholder ='Email'
                value       ={email.toLowerCase()}
                pattern     ="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange    ={emailChanged}
                /> 
                <br></br> <small htmlFor="email" className='err-msg'><em>{errorEmail}</em></small><br></br>    
     
            <input 
                type        ="password"
                id          ="password"
                name        ="password"
                placeholder ='Password'
                value       ={password}
                pattern     =".{4,}"
                onChange    ={passwordChanged}
            /> <br></br> <small htmlFor="password" className='err-msg'><em>{errorPswd}</em></small><br></br> 

        <input type="submit" id="submitbtn" value="Register"/>
      </form> 
      <p><i>Already have an account?</i></p><Link to="/login"><em className='emLink'>Login</em></Link>
      </div>
      </div>
      
  </div>
  )
}


