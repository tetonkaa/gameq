// packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css';
import GameCard from '../../components/GameCard'


export default function Home(props) {
    
    
  

    // render JSX
    return (
        <div>        
            
            <main className="game-card">
                <GameCard />
            </main>
        </div>

        
        
    )
}