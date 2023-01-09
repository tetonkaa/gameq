import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Comment from '../../components/Comment'
import './gameCard.css'

 function Profile(props) {
    const [currentGame, setCurrentGame] = useState({})
    const [commentKey, setCommentKey] = useState(0)
  
    
    const navigate = useNavigate()

    useEffect(() => {
        if (!props.isLoggedIn) {
            navigate('/')
        }
    }, [props.isLoggedIn])

 
    async function deleteUser() {
        const config = {
            headers:{
                'Authorization': localStorage.getItem('token')
            }
        };
        await axios.delete('user', config)
        
      
      localStorage.clear()
      props.setIsLoggedIn (false)
      
    
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
        if(currentGame !== props.user.favGameId) {
            getTheGame()
        }
    }, [currentGame])
    

    return(
        <main className="profileContainer">
            <div className="profilePage">
            <h2 className="userName">{props.user.username}</h2>
            <div className="userBio">
            Bio:<br/>
            <br />
            {props.user.bio}
            <br />
            <a href={props.user.twitchLink}>{props.user.twitchLink}</a>
            </div>
            <h2 className="favGame">Favorite Game</h2>
            <div className='card-container'>
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={currentGame.background_image} alt="Card image cap" />
                <h5 className="card-title">{currentGame.name}</h5>
                <p className="card-text rating">{currentGame.rating}</p>
                <Link to="/search"><button className='btn btn-danger changeGame'>Change Favorite Game</button></Link>
            </div>
            </div>
            
            <div className='content-under'>
                
                <br />
                <Comment key={commentKey} setCommentKey={setCommentKey} />
            </div>
            <button className="someRedBtn" onClick={()=> deleteUser()}> Delete Account</button>
            </div>
            
            
        </main>
        
    )
 }

 export default Profile