// packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css';
import GameCard from '../../components/GameCard'

export default function Home(props) {
    
    
  

    // render JSX
    return (
        <div className="video-gq">
            <header>
 
<div className="carosel" id="carosel1">
  <a className="carosel-control carosel-control-left glyphicon glyphicon-chevron-left" href="#"></a>
  <div className="carosel-inner">
  <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/video.mp4" type="video/mp4"></source>
                </video> 
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/video2.mp4" type="video/mp4"></source>
                </video> 
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/video3.mp4" type="video/mp4"></source>
                </video> 
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/video4.mp4" type="video/mp4"></source>
                </video> 
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/video5.mp4" type="video/mp4"></source>
                </video>
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/video6.mp4" type="video/mp4"></source>
                </video>
  </div>
  <a class="carosel-control carosel-control-right glyphicon glyphicon-chevron-right" href="#"></a>
</div>
<div className="carosel" id="carosel2">
  <a className="carosel-control carosel-control-left glyphicon glyphicon-chevron-left" href="#"></a>
  <div className="carosel-inner">
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/videoset.mp4" type="video/mp4"></source>
                </video>
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/videoset1.mp4" type="video/mp4"></source>
                </video>
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/videoset6.mp4" type="video/mp4"></source>
                </video>
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/videoset4.mp4" type="video/mp4"></source>
                </video>
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/videoset5.mp4" type="video/mp4"></source>
                </video>
                <video className="video-bg" autoPlay muted loop>
                <source src="../../assets/video/videoset3.mp4" type="video/mp4"></source>
                </video>
  </div>
  <a class="carosel-control carosel-control-right glyphicon glyphicon-chevron-right" href="#"></a>
</div>
            </header>
            <br />
        <main>
            <GameCard />
        </main>
        </div>
        
    )
}