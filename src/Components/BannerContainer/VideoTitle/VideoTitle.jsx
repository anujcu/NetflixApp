import { PLAY_ICON } from '../../../Constants/Constants'
import './VideoTitle.css'
const VideoTitle = ({original_title,overview}) => {
  return (
    <div className="bannerTitleContainer">
      <div className='bannerTitleContainerInner'>
      <h1>{original_title}</h1>
      <p>{overview}</p>
      <div className='videoTitleActions'>
        <button type='button' className='PlayNowButton'>
          <img src={PLAY_ICON} alt='play' className='playIcon' />
           Play Now</button>
        <button type='button' className='moreInfoButton'>More Info</button>
      </div>
      </div>
      
    </div>
  )
}

export default VideoTitle
