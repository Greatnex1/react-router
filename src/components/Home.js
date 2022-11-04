import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const Home = () => {
  const  navigate = useNavigate()
  const  location = useLocation()
  console.log(location.state?.name);
  return (
    <>
    <h1>Home</h1>
    
    </>
  )
}

export default Home