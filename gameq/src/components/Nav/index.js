import { Routes, Route, Link } from 'react-router-dom'
import './nav.css'
    function Nav() {
        return(
            <nav>
            <div class="content">
                <Link to='/' >Home</Link>
                <div>
                    <Link to='/signup' >Sign Up</Link>
                    <Link to='/login' >Log In</Link>
                </div>
            </div>
            </nav>
        )
    }

export default Nav