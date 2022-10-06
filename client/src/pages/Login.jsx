import { Link } from 'react-router-dom'

const Login = () => {
  
  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  return ( 
    <div className="container pt-5 mt-5">
      <h2 className="h2 pb-3">Login</h2>
      <form action="" method="get">
        <div className="form-group">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            className="form-control mb-3" 
            id="email2" name="email" 
            placeholder="name@email.com" 
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            className="form-control mb-3" 
            id="password2" 
            name="password" 
            required
          />
        </div>
        <div className="form-group d-grid gap-2">
          <button type="submit" className="btn btn-secondary btn-lg mt-2">
            Login
          </button>
          <span className="text-center">
            - or -
          </span>
          <button href="/auth/google" className="btn btn-outline-dark btn-lg" onClick={google}>
            Continue with <i className="bi bi-google"></i>oogle 
          </button>
        </div>
      </form>
      <p className="lead mt-5 text-center">Not a member? <Link to="/register">Sign Up</Link></p>
  </div>
  );
}
 
export default Login;