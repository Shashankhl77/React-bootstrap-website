import React from 'react'
function Nav() {
  return ( 
   <div className="navbar">
    <div className="nav-container">
      <img src="./src/images/logo-1.png" alt="smart-engine-logo" height="80px" id="logo-1"/>

      <div id="nav-li">
         <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">SERVICES</a></li>
          <li><a href="/">PROJECTS</a></li>
          <li><a href="/">CONTACT</a></li>
          <li><a href="/">CLIENTS</a></li>
          <li><i class="fa-solid fa-magnifying-glass" id="search-icon"></i></li>
         <li> <i class="fa-solid fa-bars" id="menu-bar"></i></li>
         </ul>
      </div>
    </div>
   </div>
   );
}

export default Nav;