import React from "react";
import Home from "./components/Home";
import About from "./components/About"
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import PageNotFound  from "./components/PageNotFound"
import Users from "./components/Users";
import  UserDetails from  "./components/UserDetails"

const App = () => {
  return (
    <>
   <Nav/>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/register" element={<Register />}/>
  <Route path="*" element={<PageNotFound />}/>
  <Route path="/users" element={<Users />}>
    </Route>
  <Route path=":userId" element={<UserDetails />}/>
</Routes>

    
  </>
  )
}

export default App