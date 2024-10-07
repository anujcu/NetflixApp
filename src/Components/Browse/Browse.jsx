import './Browse.css'
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies"
import Header from "../Header/Header"
import BannerContainer from '../BannerContainer/BannerContainer'
import SecondaryContainer from '../SecondaryContainer/SecondaryContainer'
import usePopularMovies from '../../Hooks/usePopularMovies'



const Browse = () => {
useNowPlayingMovies();
usePopularMovies();


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