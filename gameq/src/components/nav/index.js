import { Routes, Route, Link } from 'react-router-dom'

    function Nav() {
        return(
            <nav>
                <Link to='/' >Home</Link>
                <Link to='/signup' >Sign Up</Link>
                <Link to='/login' >Log In</Link>
                <Link to='/profile'>Profile</Link>
            </nav>
        )
    }

export default Nav