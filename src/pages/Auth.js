import React, { useState } from 'react'
import '../styles/pages/Auth.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const Auth = () => {
  const [signUp, setSignUp] = useState(true)
  const [authData, setAuthData] = useState({username:'', email: '', password: '',conformation:'' })
  const onChangeFunc = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

 

  const authFunc = async (e) => {
    e.preventDefault()

    const payload = {
      username: authData.username,
      email: authData.email,
      password: authData.password,
      conformation: authData.conformation
  
    }

    if (signUp) {
      //Registrasya
      try {
      const data =  await axios.post('http://192.168.40.50:8001/register',payload)
        window.location = '/dashboard'
       

      } catch (error) {
        toast.error(error.message)
      }

    } else {
      //Login
      try {
        await axios.post('http://192.168.40.50:8001/login',payload)
        window.location = '/dashboard'
       
        

      } catch (error) {
        toast.error(error.message)
      }
    }
  }



  /*
    const onChangeFunc = (e) => {
      setAuthData({ ...authData, [e.target.name]: e.target.value })
    } 
    const authFunc = async () => {
      if (signUp) {
        //Registrasya
        try {
          const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
          const user = data.user;
          if (user) {
            window.location = '/dashboard'
          }
  
        } catch {
          toast.error(error.message)
        }
  
      } else {
        //Login
      }
    }
   */




  return (
    <div className='auth'>
      <div className='auth-container'>
        <h2>{signUp ? "REGISTER" : "LOGIN"}</h2>
        <input  name='username' value={authData.username} onChange={onChangeFunc} type='text' placeholder='User Name' />
        {signUp &&  <input name='email' value={authData.email} onChange={onChangeFunc} type='email' placeholder='Email' />}
        <input name='password' value={authData.password} onChange={onChangeFunc} type='password' placeholder='Password' />
        {signUp && <input name='conformation' value={authData.conformation} onChange={onChangeFunc} type='password' placeholder='Password tazeden' />}
        <div className='auth-container-google'>Google bilen iceri gir</div>
        <p onClick={() => setSignUp(!signUp)}>{signUp ? "On registrasya boldunyzmy" : "Registrasiya bolmak isleyarsinizmi"}</p>
        <div onClick={(e) => authFunc(e)} className='auth-container-button'>{signUp ? "Register" : "Login"}</div>
      </div>
    </div>
  )
}

export default Auth
