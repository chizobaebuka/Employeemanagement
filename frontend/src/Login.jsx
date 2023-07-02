// import React from 'react';

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='email' className='form-control rounded-0' />
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p>Agree to our terms and services</p>
                    <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login