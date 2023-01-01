import { useState } from 'react';
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import "../Login/main.css"

export default function SignUp({setIsLoggedIn, isLoggedIn}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:8001/user/signup', formState)
        localStorage.token = data.token
        setIsLoggedIn(true)
    }

    const navigate = useNavigate()
    
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/Profile')
        }
    }, [isLoggedIn])

    return (
        <div className="container">
            <h2>Sign Up</h2>

            <form onSubmit={submitHandler}>
                <div className="input-text">
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formState.username} />
                </div>

                <div className="input-text">
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formState.password} />
                </div>

                <div className="input-text">
                    <label htmlFor='Bio'>Bio</label>
                    <input
                        type='textarea'
                        name='bio'
                        onChange={handleChange}
                        value={formState.bio} />
                </div>
                <div className="input-text">
                    <label htmlFor='twitchLink'>Twitch Link</label>
                    <input
                        type='text'
                        name='twitchLink'
                        onChange={handleChange}
                        value={formState.twitchLink} />
                </div>

                <button type='submit' class="button" >Sign Up</button>
            </form>
        </div>
    )
}