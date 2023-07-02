// eslint-disable-next-line no-unused-vars
import React from 'react'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Login</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login