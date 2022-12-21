import { useState, useEffect } from 'react'
import axios from 'axios'
import './gameCard.css'

const GameCard = () => {
    const [currentGame1, setCurrentGame1] = useState({})
    const [currentGame2, setCurrentGame2] = useState({})
    const [currentGame3, setCurrentGame3] = useState({})
    const [currentGame4, setCurrentGame4] = useState({})

    useEffect(() => {
        getAllGames()
    },[])

    async function getGameInfo(gameId) {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=aa63c7887e7a4a0e804fe2a27c004822`)
        return data
    }
    
    function getAllGames() {
        getGameInfo('counter-strike-global-offensive')
        .then(data => setCurrentGame1(data))
        getGameInfo('fortnite')
        .then(data => setCurrentGame2(data))
        getGameInfo('call-of-duty-modern-warfare-ii')
        .then(data => setCurrentGame3(data))
        getGameInfo('escape-from-tarkov')
        .then(data => setCurrentGame4(data))
        
    }
    
    
    return(
        <main className="card-container">
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={currentGame1.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentGame1.name}</h5>
                <p className="card-text">{currentGame1.rating}</p>
                <a href="#" className="btn btn-primary">LIKE</a>
            </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={currentGame2.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentGame2.name}</h5>
                <p className="card-text">{currentGame2.rating}</p>
                <a href="#" className="btn btn-primary">LIKE</a>
            </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={currentGame3.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentGame3.name}</h5>
                <p className="card-text">{currentGame3.rating}</p>
                <a href="#" className="btn btn-primary">LIKE</a>
            </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={currentGame4.background_image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{currentGame4.name}</h5>
                <p className="card-text">{currentGame4.rating}</p>
                <a href="#" className="btn btn-primary">LIKE</a>
            </div>
            </div>
        </main>
    )
}

export default GameCard