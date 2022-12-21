import { useState } from 'react'
import axios from 'axios'

const GameCard = () => {
    const [currentGame, setCurrentGame] = useState({})

    async function getGameInfo(gameId) {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=c97dea831b45422c91e825a94f59ee07`)
        return data
    }
    getGameInfo(25600)
        .then(data => setCurrentGame(data))
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={currentGame.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentGame.name}</h5>
                <p className="card-text">{currentGame.rating}</p>
                <a href="#" className="btn btn-primary">LIKE</a>
            </div>
        </div>
    )
}

export default GameCard