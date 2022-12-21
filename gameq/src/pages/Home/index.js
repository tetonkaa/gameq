// packages
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'

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
        <button class="loginbtn btn btn-dark" onClick={() => { props.setIsLoggedIn(true) }}>
            <h1>Log in</h1>
        </button>
    )
}