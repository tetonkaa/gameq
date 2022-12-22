import { Routes, Route, Link } from 'react-router-dom'
import './nav.css'

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  
  }


  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  
  } 
function Nav() {
  return(
            <nav>
            <div id="mySidebar" className="sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}> &#8592; </a>
            <Link to='/' >Home</Link>
            <Link to='/signup' >Sign Up</Link>
            <Link to='/login' >Log In</Link>
            </div>

        <div className="btncontainer">
        <button className="openbtn" onClick={openNav}>GQ</button> 
        </div> 
            </nav>
        )
      }
      
      export default Nav