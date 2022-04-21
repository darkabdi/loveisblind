import {useEffect} from 'react'


export default function Profile() {
   
  useEffect(()=>{
    document.title = "403 | Error"
    const token = localStorage.getItem('token')
    console.log(token)
    if(!token){
      return(
        <div>
          <h2>Sorry you can't access this page</h2>
          <p>Please <a href='/login' className='logreg'><em>login</em></a> or <a href='/register' className='logreg'><em>create an account</em></a> </p>
        </div>
    
      );
    } else 
    if(token){
      

    }
    
    else{
      return (
        <div className='hej'>
    PROFIL INLOGGAD
        </div>
      )

    }
    })

}