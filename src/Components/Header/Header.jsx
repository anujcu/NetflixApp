import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO } from '../../Constants/Constants';
import './Header.css';
import {signOut } from "firebase/auth";
import {AUTH} from '../../Utils/Firebase'
import { useSelector } from 'react-redux';
import appStore from '../../Store/AppStore';
import { useEffect } from 'react';


const Header = () => {


const navigate=useNavigate();
const user=useSelector(appStore=>appStore.user)
useEffect(()=>{
  console.log('user from Store',user)
},[])


     const handleSignOut=()=>{
          signOut(AUTH).then(() => {
            navigate("/");
          }).catch((error) => {
           navigate("/error");
          });
    }
  return (
    <div className='headerWrapper'>
    
        <img src={NETFLIX_LOGO} alt='netflix logo' className='netFlixHeaderLogo'/>
        <div className='headerProfileInfo'><p>Welcome,
         <span> {user.displayName}</span>
        </p>
          
          
     
            <button type='button' onClick={handleSignOut}>Sign Out</button>
        </div>
     
    </div>
  )
}

export default Header