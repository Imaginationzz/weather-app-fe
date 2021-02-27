import React from "react"
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import "../App.css"

const LoginComponent = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const login = async ()=> {
    
    try {
      const res = await axios("http://localhost:3002/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { username,password}
    })
   
  
    localStorage.setItem("accessToken",res.data.accessToken)
console.log(res.data)
      history.push("/weather")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <input
        className="input-fields" 
          type="text"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>
        <input
        className="input-fields mt-2" 
          type="password"
          placeholder="*********"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>
        <input className="main-btn mt-2" type="button" value="Login" onClick={login}></input>
        <a href="http://localhost:3002/users/googleLogin" ><button className="main-btn mt-2">Sign in With Google</button></a>
      </header>
    </div>
  )
}

export default LoginComponent
