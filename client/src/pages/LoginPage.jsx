import React from 'react'

function LoginPage() {
  return (
    <div className=' relative h-screen w-screen'>
        <img 
            className=' object-fill'
            src= "/backgroundPro.svg"
            alt='background Image' 
        />
        
        <div className=' absolute top-[200px] w-[30%] rounded-3xl left-[35%] sm:w-full h-auto bg-stone-100 p-5'>
            <p className=' text-sm font-sans font-bold text-stone-700'>Enter Your Email</p>
            <p>will not work on import PropTypes from 'prop-types'</p>
        </div>
    </div>
  )
}

export default LoginPage