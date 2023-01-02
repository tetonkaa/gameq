import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'

import './nav.css'

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  
  }


  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  
  } 
function Nav(props) {
  const [toHome, setToHome] = useState('false')

    if (toHome === true) {
      return <Navigate to="/"></Navigate>
    }

    function logout() {
        localStorage.clear()
        props.setIsLoggedIn(false)
        props.setUser({})
        setToHome(true)
    }
  
  return(
            <nav>
            <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}> &#8592; </a>
            <Link to='/' >Home</Link>
            { props.isLoggedIn ?
            <Link to='/Profile' >Profile</Link>
            : null}
            { !props.isLoggedIn ?
            <> 
            <Link to='/signup' >Sign Up</Link>
            <Link to='/login' >Log In</Link>
            </>
            : <p className="logOut" onClick={() => logout()}>Log out</p>
            }
            </div>

        <div className="btncontainer">
        <button className="openbtn" onClick={openNav}>GQ</button> 
        </div> 
            </nav>
        )
      }
      
      export default Nav