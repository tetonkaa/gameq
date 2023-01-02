// packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css';
import GameCard from '../../components/GameCard'
import VideoBroadcast from "../../components/VideoBroadcast";

export default function Home(props) {
    
    
  

    // render JSX
    return (
        <div>        
            <div className="video">
                <VideoBroadcast/>
            </div>
            <main className="game-card">
                <GameCard />
            </main>
        </div>

        
        
    )
}