import { Routes, Route, Link } from 'react-router-dom'
import './nav.css'
<<<<<<< HEAD

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
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}> ></a>
            <Link to='/' >Home</Link>
            <Link to='/signup' >Sign Up</Link>
            <Link to='/login' >Log In</Link>
=======
    function Nav(isLoggedIn) {
        return(
            <nav>
            <div class="content">
                <Link to='/' >Home</Link>
                <div>
                    <Link to='/signup' >Sign Up</Link>
                    <Link to='/login' >Log In</Link>
                </div>
>>>>>>> b6a0e1b6debb48e06fa04a1603563f0d35556570
            </div>

        <div className="btncontainer">
        <button className="openbtn" onClick={openNav}>GQ</button> 
        </div> 
            </nav>
        )
      }
      
      export default Nav