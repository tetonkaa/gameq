import "./main.css"


function VideoBroadcast(){
    return(
 <div className="video-gq">
 <header>
     {/* <h1 className="game-title">GameQ</h1> */}
<div className="carosel" id="carosel1">
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

</div>
<div className="carosel" id="carosel2">
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
</div>
 </header>
 </div> 
    )
}

export default VideoBroadcast
