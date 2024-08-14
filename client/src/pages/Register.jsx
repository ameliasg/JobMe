import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
  <Wrapper>
    <form className='form'>
      <Logo />
      <h4>Register</h4>
      <FormRow 
        type="text" 
        name="name" 
        defaultValue='Amelia' />
      <FormRow 
        type="text" 
        name="lastName" 
        labelText='last name' //labelText for camelText in FormRow.jsx
        defaultValue='Smith' />
      <FormRow 
        type="text" 
        name="location" 
        defaultValue='Earth' />
      <FormRow 
        type="email" 
        name="email" 
        defaultValue='amelia@gmail.com' />
      <FormRow 
        type="password" 
        name="password" 
        defaultValue='secret123' />
      <button type='submit' className='btn btn-block'>submit</button>
      <p>Already a member?
        <Link to='/login' className='member-btn'>Login</Link>
      </p>
    </form>
  </Wrapper> 
  )
}

export default Register