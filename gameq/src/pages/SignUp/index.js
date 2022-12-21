import { useState } from 'react';

export default function SignUp(props) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        endpoint: 'signup'
    })

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    return (
        <div className="container">
            <h2>Sign Up</h2>

            <form>
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

                <button onClick={(e) => props.handleSubmit(e, formState)}>Sign Up</button>
            </form>
        </div>
    )
}