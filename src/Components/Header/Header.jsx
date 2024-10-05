import { NETFLIX_LOGO } from '../../Constants/Constants';
import './Header.css';
const Header = () => {
  return (
    <div className='headerWrapper'>
    
        <img src={NETFLIX_LOGO} alt='netflix logo' className='netFlixHeaderLogo'/>
    </div>
  )
}

export default Header