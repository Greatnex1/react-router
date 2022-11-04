import React from 'react'
import {useRoutes} from  'react-router-dom'
import UserDetails from './UserDetails'

const Router = () => {
  return useRoutes (
[
    {
        path: "/",
        element:   <Home/>
    },
    {
        path: "/users",
        element:<User/>,
        children:[
            {
                path: "userId",
                element: <UserDetails/>
            },
        ]
    },
]    
  )
}

export default Router