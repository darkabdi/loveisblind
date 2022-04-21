
import { Link } from 'react-router-dom'


function Member(){
  document.title += ' | Profile'
  const token = localStorage.getItem('token')
  console.log('token: ' + token)
    if(token) {
        const signOut = () => {
          localStorage.removeItem('token')
          window.location.href='/'
        }
    return(
        <div className='container-center'>
      
          <button onClick={signOut}>Logout</button>
        </div>
    )

  }
  }
function Intruder(){
  document.title = '403 | Access denied'
  const token = localStorage.getItem('token')
  console.log('token: ' + token)
    if(!token){
      return(
        <div className='container-center'>
          <h1>403</h1>
  
          <span>
          <p>Please</p> <Link to="/login"><em className='emLink'>login</em></Link><p> or</p><Link to="/register"><em className='emLink'>register</em></Link><p>to access this page</p>
          </span>
    </div>
    )

  }
}

export default  function Profile() {
  const token = localStorage.getItem('token')
  console.log('token: ' + token)
  
  return (
    token ? <Member /> : <Intruder/>
  )

}