import { useState } from 'react';
import axios from 'axios'
import "./main.css"
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom"


export default function Login ({setIsLoggedIn , isLoggedIn}) {
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
        const { data } = await axios.post('user/login', formState)
        localStorage.token = data.token
        setIsLoggedIn(true)
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/Profile')
        }
    }, [isLoggedIn])
    // redirect to home page if not logged in
    return (
        <div className="logIncontainer">
            <h2>Login</h2>

            <form onSubmit={submitHandler}>
                <div className="logininput-text">
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formState.username} />
                </div>

                <div className="logininput-text">
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formState.password} />
                </div>

                <button type='submit'class="button" >Login</button>
            </form>
        </div>
    )
}