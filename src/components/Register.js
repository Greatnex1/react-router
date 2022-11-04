import React from 'react'
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = () =>{
        toast.success("Your registration is successful")
        setTimeout(() =>{
            navigate('/', {replace:true, state:{name:"Noah"}}) 
        },3001);
    }
  return (
<>
<ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    <h1>Welcome to Kpakurumo Grammer School Login page</h1>
    <button onClick={handleSubmit}>Submit</button> <br></br>


    <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  )
}

export default Register