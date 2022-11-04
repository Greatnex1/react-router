import React from 'react'
import { Link,NavLink, Outlet } from 'react-router-dom'
// import './' from ''
const Nav = () => {
  const navStyle =({isActive}) => {
    return{
      fontWeight: isActive  ? 'bold' :'normal',
      textDecoration: isActive ? 'none' :'underline'
    }
  
  }
    
  
   return (
    <>
  <nav>
   <ul>
    <li>
    <NavLink  style={navStyle} to ="/" end>Home</NavLink>
    </li>
    <li>
    <NavLink style={navStyle} to="/about">About</NavLink></li>
    <li>
    <NavLink style={navStyle} to="/register">Sign up</NavLink></li>
   
    {/* <li><a href="/contact"></a></li> */}
        
   </ul>
   </nav>
   <Outlet/>
  
   </>
  )
}

export default Nav