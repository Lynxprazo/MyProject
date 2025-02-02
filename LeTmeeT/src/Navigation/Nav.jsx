import React from 'react'
import {NavLink} from  "react-router-dom"
import "./Nav.css"

const Nav = () => {
  return (
    <div>
    
      <div className='nav-container'>
        <ul>
           <NavLink to ="/" ><li>Home</li></NavLink>
           <NavLink to ="/Email" ><li>Charts</li></NavLink>
           <NavLink to ="/" ><li>Members</li></NavLink>
           <NavLink to ="/" ><li>Arrangement</li></NavLink>
           <NavLink to ="/" ><li>Help</li></NavLink>
           <NavLink to ="/Authentication"><li>Logout</li></NavLink>
           {/* <NavLink to= "/"><li><Main></Main></li></NavLink> */}
           <NavLink to= "/maincomponet"><li>Main</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Nav
