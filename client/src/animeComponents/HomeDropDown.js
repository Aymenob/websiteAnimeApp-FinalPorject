import React from 'react'
import { Link } from 'react-router-dom'
const HomeDropDown = ({handleSingOut,handleRegister,src,user,authorized}) => {
  return (
    
    <div class="Dropdown">
      <button class="link dropdown-toggle" type="button" >
        <img class="rounded-circle " alt="" src={src} />
        {!user && <span>Login</span>}<span class="caret"></span>
      </button>
      <div class="Dropdown-menu" role="menu" aria-labelledby="menu1">
        {authorized ? <li><Link role="menuitem" to="/Admin">Account</Link></li> : <li><Link role="menuitem" to="/Login">Sign in</Link></li>}
        {authorized && <li><a onClick={ handleSingOut} role="menuitem" tabindex="-1" href="#">Sign out</a></li>}
        {!authorized && <li><a onClick={handleRegister} role="menuitem" tabindex="-1" href="#">Register</a></li>}
      </div>
    </div>
  
  )
}

export default HomeDropDown