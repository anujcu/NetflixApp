import { useRef, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import {checkLoginForm} from '../../Utils/validate';
import {AUTH} from '../../Utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import appStore from '../../Store/AppStore';
import { useNavigate } from 'react-router-dom';
import Browse from '../Browse/Browse';

const Login=()=>{

    const navigate=useNavigate();
    const[signUp,setSignUp]=useState(true);
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);


    const [errorMessage,setErrorMessage]=useState(null);

    //dispatch useer action
    //const handleUserDispatch=useDispatch(appStore.user)

    const HandleButtonClick=()=>{

     //Validate the form data
      const errorMessage=  checkLoginForm(email.current.value,password.current.value);
      setErrorMessage(errorMessage);
      if(errorMessage) return;

      //Sign In / Sign Up
      if(!signUp){
       
       
        /// Sign Up
            createUserWithEmailAndPassword(AUTH,email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                //Update the User Profile
                            updateProfile(user, {
                                displayName: name.current.value,
                                photoURL: "https://avatars.githubusercontent.com/u/8604223?s=40&v=4"
                            }).then(() => {
                                setErrorMessage("Profile Updated Successfully")
                            }).catch((error) => {
                                setErrorMessage(error);
                            });
                navigate("/browse");
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorCodeMessage = error.message;
                setErrorMessage(errorCodeMessage);
            });
           


      }
      else{
        //Sign In
         signInWithEmailAndPassword(AUTH,email.current.value,password.current.value)
         .then((userCredential) => {
             // Signed up 
             const user = userCredential.user;
             navigate("/browse");
         })
         .catch((error) => {
             //const errorCode = error.code;
             const errorCodeMessage = error.message;
             setErrorMessage(errorCodeMessage);
         });
      }
        
     


    }

     
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
             !signUp && <input ref={name}  type='text' name='name' className='inputControlLogin' placeholder='Name'/>
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


