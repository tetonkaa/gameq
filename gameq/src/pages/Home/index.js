// packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css';
import GameCard from '../../components/GameCard'

export default function Home(props) {
    const navigate = useNavigate()
    
    // redirect to feed page if logged in
    useEffect(() => {
        if (props.isLoggedIn) {
            navigate('/profile')
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <main>
            <GameCard />
        </main>
        
    )
}