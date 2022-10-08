import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

  const logout = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
  }

  return ( 
    <nav className="navbar navbar-expand-md navbar-light  py-3">
      <div className="container-fluid">
      <Link to="/" className="navbar-brand">
        <span className="fw-bold text-muted display-5">
          MacroMate
        </span>
      </Link>
      {/* <!-- toggle mobile nav --> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <!-- navbar links --> */}
      <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul className="navbar-nav text-center">
          <li className="nav-item lead">
            <Link to="/" className="nav-link text-dark">Home</Link>
          </li>
          {user ? (
            <div style={{display: 'flex'}}>
              <li className="nav-item lead">
               <Link to="/nutrition" className="nav-link text-dark">Nutrition</Link>
              </li>
              <li className="nav-item lead">
                <Link to="" className="nav-link text-dark">Profile</Link>
              </li>
              <li className="nav-item px-2 lead">
                <button  className="btn btn-sm btn-secondary nav-link text-light" onClick={logout}>Logout</button>
              </li>
            </div>
          ): (
            <div style={{display: 'flex'}}>
              <li className="nav-item px-2 lead">
                <Link to='/login' className="btn btn-sm btn-secondary nav-link text-light">Login</Link>
              </li>
              <li className="nav-item px-2 lead">
                <Link to='/register' className="btn btn-sm btn-outline-secondary nav-link text-dark">Sign Up</Link>
              </li>
            </div>
          )}
          </ul>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;