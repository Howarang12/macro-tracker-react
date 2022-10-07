import { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Register = () => {

  const [registerUsername, setRegisterUsername] = useState('')

  const [registerEmail, setRegisterEmail] = useState('')

  const [registerPassword, setRegisterPassword1] = useState('')
  const [registerPassword2, setRegisterPassword2] = useState('')
  const [validMatch, setValidMatch] = useState(false)

  const [errMsg, setErrMsg] = useState('')

  const handleSubmit = () => {
    window.open('http://localhost:5000/auth/register', '_self')
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/register",
    }).then((res) => console.log(res));
  };


  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  return ( 
    <div className="container pt-5 mt-5">
      <h2 className="h2 pb-3">Register</h2>
      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="username" 
            className="form-control mb-3" 
            id="username" 
            name="username" 
            required
            onChange={e => setRegisterUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            className="form-control mb-3" 
            id="email" 
            name="email" 
            placeholder="name@email.com" 
            required
            onChange={e => setRegisterEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            className="form-control mb-3" 
            id="password" 
            name="password" 
            required
            onChange={e => setRegisterPassword1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input 
            type="password" 
            className="form-control mb-3" 
            id="password2" 
            name="password2" 
            required
            onChange={e => setRegisterPassword2(e.target.value)}
          />
        </div>
        <div className="form-group d-grid gap-2">
          <button 
            type="submit" 
            className="btn btn-secondary btn-lg mt-2"
            onClick={handleSubmit}
          >
            Register
          </button>
          <span className="text-center">
            - or -
          </span>
          <button 
            className="btn btn-outline-dark btn-lg" 
            onClick={google}
          >
            Continue with <i className="bi bi-google"></i>oogle 
          </button>
        </div>
      </form>
      <p className="lead mt-5 text-center">Have an Account? <Link to='/login' >Login</Link></p>
  </div>
  );
}
 
export default Register;