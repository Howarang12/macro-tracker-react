import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const REGISTER_URL = '/auth/register'

const Register = () => {
  const navigate = useNavigate()

  const initialValues = {username:'' , email: '', password: '', password2: ''}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [emailTaken, setEmailTaken] = useState(false)

  const handleChange = (e) => {
    const {name, value } = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    
    if(Object.keys(formErrors).length > 0 ){
      console.log('error')
      return
    } 
  
    try{
      const response = await axios({
        url: '/auth/register',
        method: 'post',
        data: formValues
      })
      if(response.data === 'user already exists'){
        setEmailTaken(true)
      } else {
        navigate('/login')
      }
      console.log(response.config.data)
      console.log(response.data)
      // setSuccess(true)
    } catch(err) {
      console.log(err)
    }

  };


  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i // <-- regex for email format
    if (!values.username) {
      errors.username = 'Username is required!'
    }
    if (!values.email) {
      errors.email = 'Email is required!'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters'
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 16 characters'
    }
    if(!values.password2 && !errors.password){
      errors.password2 = 'Confirm password'
    } else if(values.password2 !== values.password && !errors.password){
      errors.password2 = 'Passwords do not match'
    }
    return errors
  }

  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  return ( 
    <>
    {success ? (
      <section className='container h-100 d-flex flex-column justify-content-center align-items-center' style={{height: "100%"}}>
        <h1 className='text-center'>Success!</h1>
        <p className="lead mt-5 text-center">
          <Link to='/login' className="btn btn-lg btn-secondary btn-block text-light">Login</Link>
        </p>
      </section>
    ) : (
      <div className="container pt-5 mt-5">
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <h2 className="h2 pb-3">Register</h2>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="username" 
              className="form-control mb-3" 
              id="username" 
              name="username" 
              value={formValues.username}
              onChange={handleChange}
            />
            <p className='text-danger'>{formErrors.username}</p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>         
            <input 
              type="text" 
              className="form-control mb-3" 
              id="email" 
              name="email" 
              placeholder="name@email.com" 
              value={formValues.email}
              onChange={handleChange}
            />
            <p className='text-danger'>{formErrors.email}</p>
            <p className='text-danger'>{emailTaken ? 'Email is already registered' : null }</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              className="form-control mb-3" 
              id="password" 
              name="password" 
              value={formValues.password}
              onChange={handleChange}
            />
            <p className='text-danger'>{formErrors.password}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input 
              type="password" 
              className="form-control mb-3" 
              id="password2" 
              name="password2" 
              value={formValues.password2}
              onChange={handleChange}
            />
            <p className='text-danger'>{formErrors.password2}</p>
          </div>
          <div className="form-group d-grid gap-2">
            <button 
              type="submit" 
              className="btn btn-secondary btn-lg mt-2"
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
        <p className="lead mt-5 text-center">Have an Account? <Link to='/login' > Login</Link></p>
      </div>
      )
    }
  </>
  )
}
 
export default Register;