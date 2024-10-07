import './Browse.css'
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies"
import Header from "../Header/Header"
import BannerContainer from '../BannerContainer/BannerContainer'
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer'



const Browse = () => {
useNowPlayingMovies();


  return (
    <>
        <Header/>
        <div className="browsePageContainer">
          <BannerContainer/>
          <SecondaryContainer/>
        </div>
    </>

  )
}

export default Browse