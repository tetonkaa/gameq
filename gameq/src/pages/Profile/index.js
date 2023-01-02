import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios'
import Comment from '../../components/Comment'
import './gameCard.css'

 function Profile(props) {
    const [currentGame, setCurrentGame] = useState({})
    const [commentKey, setCommentKey] = useState(0)

    async function deleteUser() {
        const config = {
            headers:{
              'Authorization': localStorage.getItem('token')
            }
          };
        await axios.delete('http://localhost:8000/user', config)
    }

    
    async function getGameInfo(gameId) {
        const { data } = await axios.get(`https://api.rawg.io/api/games/${gameId}?key=aa63c7887e7a4a0e804fe2a27c004822`)
        return data
    }


    useEffect(() => {
        async function getTheGame() {
            const game = await getGameInfo(props.user.favGameId)
            console.log(game)
            setCurrentGame(game)
        }
       
        getTheGame()
        
    },[props.user.favGameId])
    

    return(
        <main>
            <h1>{props.user.username}</h1>
            <br />
            <h1>{props.user.bio}</h1>
            <br />
            <h1>{props.user.twitchLink}</h1>
            <h1>Favorite Game</h1>
            <div className='card-container'>
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={currentGame.background_image} alt="Card image cap" />
                <h5 className="card-title">{currentGame.name}</h5>
                <p className="card-text">{currentGame.rating}</p>
                <Link to="/search"><button className='btn btn-secondary changeGame'>Change Favorite Game</button></Link>
            </div>
            </div>
            
            <div className='content-under'>
                
                <br />
                <Comment key={commentKey} setCommentKey={setCommentKey} />
            </div>
            
            
            
        </main>
        
    )
 }

 export default Profile