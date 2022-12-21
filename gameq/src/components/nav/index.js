// packages
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// styles
import './styles.css'

export default function Nav(props) {
    // state declaration: build JSX array of NavBar items
    const initialState = [
        <div className='nav-item' key='1'>Theme</div>,

        <div className='nav-item' key='2'>
            <Link to='/'>
                <img alt='blogr_logo' src='blogr_logo.png' />
                <h1>logr</h1>
            </Link>
        </div>
    ]
    const [navItems, setNavItems] = useState(initialState)

    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.isLoggedIn) {
            setNavItems(initialState.concat(
                <div className="nav-item" key='3'>
                    <button onClick={() => { props.setLogInStatus(false) }}>Log Out</button>
                </div>
            ))
        } else {
            setNavItems(initialState.concat([
                <div className="nav-item" key='3'>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>
            ]))
        }
    }, [props.isLoggedIn])

    // render JSX
    return (
        <nav>
            {navItems}
        </nav>
    )
}