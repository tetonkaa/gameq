import { useState, useEffect } from 'react';
import axios from 'axios'
import './gameCard.css'

 function Profile(props) {
    const [currentGame, setCurrentGame] = useState({})

    
    
    async function getGameInfo(gameId) {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=aa63c7887e7a4a0e804fe2a27c004822`)
        return data
    }

    async function getTheGame() {
        const game = await getGameInfo(props.user.favGameId)
        console.log(game)
        setCurrentGame(game)
    }
    
    useEffect(() => {
        console.log(currentGame)
        getTheGame()
    },[])
    

    return(
        <main>
            <h1>{props.user.username}</h1>
            <br />
            <h2>{props.user.bio}</h2>
            <br />
            <a>{props.user.twitchLink}</a>
            <h1>My Favorite Game</h1>
            <div className='card-container'>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={currentGame.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentGame.name}</h5>
                <p className="card-text">{currentGame.rating}</p>
            </div>
            </div>
            </div>
        </main>
        
    )
 }

 export default Profile