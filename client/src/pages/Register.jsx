import { Link } from 'react-router-dom'
const Register = () => {

  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  return ( 
    <div className="container pt-5 mt-5">
      <h2 className="h2 pb-3">Register</h2>
      <form action="" method="post">
        <div className="form-group">
          <label for="username">Username</label>
          <input 
            type="username" 
            className="form-control mb-3" 
            id="username" 
            name="username" 
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            className="form-control mb-3" 
            id="email" name="email" 
            placeholder="name@email.com" 
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            className="form-control mb-3" 
            id="password" 
            name="password" 
            required
          />
        </div>
        <div className="form-group">
          <label for="password2">Confirm Password</label>
          <input 
            type="password" 
            className="form-control mb-3" 
            id="password2" 
            name="password2" 
            required
          />
        </div>
        <div className="form-group d-grid gap-2">
          <button type="submit" className="btn btn-secondary btn-lg mt-2">
            Register
          </button>
          <span className="text-center">
            - or -
          </span>
          <button className="btn btn-outline-dark btn-lg" onClick={google}>
            Continue with <i className="bi bi-google"></i>oogle 
          </button>
        </div>
      </form>
      <p className="lead mt-5 text-center">Have an Account? <Link to='/login' >Login</Link></p>
  </div>
  );
}
 
export default Register;