import { useState, useEffect } from 'react'
import axios from 'axios'
import './gameCard.css'

const GameCard = () => {
    const [currentGame, setCurrentGame] = useState([])

    useEffect(() => {
        getAllGames()
    },[])

    async function getGameInfo(gameId) {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=aa63c7887e7a4a0e804fe2a27c004822`)
        return data
    }
    
    async function getAllGames() {
        let arrOfGames = []
        const csgo = await getGameInfo('counter-strike-global-offensive')
        arrOfGames.push(csgo)
        const fortnite = await getGameInfo('fortnite')
        arrOfGames.push(fortnite)
        const mw2 = await getGameInfo('call-of-duty-modern-warfare-ii')
        arrOfGames.push(mw2)
        const escape = await getGameInfo('escape-from-tarkov')
        arrOfGames.push(escape)
        setCurrentGame(arrOfGames)
        
    }
    
    
    return(
        
        <main className="card-container">
            { currentGame.map((game, i) =>
            <div className="card" key={i} style={{width: "18rem"}}>
            <img className="card-img-top" src={game.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text rating">Rating:{game.rating}</p>
                </div>
            </div>
            )}
        </main>
    )
}

export default GameCard