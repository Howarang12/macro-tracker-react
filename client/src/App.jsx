import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState} from "react";


function App() {

  const [user, setUser ] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'get',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      })
      .then(res => {
        if(res.status === 200) return res.json()
        throw new Error('authentication has failed')
      })
      .then(resObject => {
        setUser(resObject.user)
      })
      .catch(err => console.log(err)) 
    }
    getUser()
  }, [])

  console.log(user)

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route 
            path="/login" 
            element={user ? <Navigate to="/"/> : <Login />}
          />
          <Route 
            path="/register" 
            element={<Register/>}
          />
          <Route 
            path="/post/:id" 
            element={user ? <Post/> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
