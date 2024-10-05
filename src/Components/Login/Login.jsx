import { useRef, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import {checkLoginForm} from '../../Utils/validate';

const Login=()=>{
    const email=useRef(null);
    const password=useRef(null);
    const [errorMessage,setErrorMessage]=useState(null);

    const HandleButtonClick=()=>{
        //Validate the form data
        //console.log('Email:',email.current.value,  'passowrd:',password.current.value)
      const errorMessage=  checkLoginForm(email.current.value,password.current.value);
      setErrorMessage(errorMessage);

      //Sign In / Sign Up


    }

      const[signUp,setSignUp]=useState(true);
        const toggleSignInForm=()=>{
            setSignUp(!signUp);
            
        }
    return(
        <>
        <Header/>
        
        <div className="loginPageContainer">
            <div className=' absolute bg-gradient-to-b from-black'>

           <form className='formWrapper' onSubmit={(e)=>{e.preventDefault()}}>
            <h1 className='loginTitle'> {signUp?'Sign In':'Sign Up'}</h1>
            {
             !signUp && <input  type='text' className='inputControlLogin' placeholder='Name'/>
            }
           
            <input ref={email} type='text' className='inputControlLogin' placeholder='Email Address'/>

            <input ref={password} type='password' className='inputControlLogin' placeholder='Password'/>
               {errorMessage!==null && <div className='errorMessage'>
                {errorMessage }
                </div>

               } 
            <button className='Login-SignUpBtn' type='submit'  onClick={HandleButtonClick}>{signUp?'Login':'Sign Up'}</button>

            <p className='toggleLinklogin-signIn'>New to NetFlix ?<button type='button' onClick={toggleSignInForm}>{signUp?'Sign Up':'Sign In'} now</button></p>

            <span className='textDescriptionLoginSignup'>This page is protected by Google reCAPTCHA to ensure you are not a bot.</span>

           </form>
            
            </div>
        </div>
        </>
    )
}
export default Login;


