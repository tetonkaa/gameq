import { Routes, Route, Link } from 'react-router-dom'
import './nav.css'

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  
  }


  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  
  } 
function Nav({isLoggedIn}) {
  console.log(isLoggedIn)
  return(
            <nav>
            <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}> &#8592; </a>
            <Link to='/' >Home</Link>
            <Link to='/Profile' >Profile</Link>
            { !isLoggedIn ?
            <> 
            <Link to='/signup' >Sign Up</Link>
            <Link to='/login' >Log In</Link>
            </>
            : <p onClick={() => localStorage.clear()}>Log out</p>
            }
            </div>

        <div className="btncontainer">
        <button className="openbtn" onClick={openNav}>GQ</button> 
        </div> 
            </nav>
        )
      }
      
      export default Nav