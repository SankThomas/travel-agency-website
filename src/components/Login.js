import React from 'react'

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input type='password' name='password' id='password' />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
