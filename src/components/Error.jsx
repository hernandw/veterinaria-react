import React from 'react'

const Error = ({message}) => {
  return (
    <div>
      <p className='bg-red-700 text-white text-center uppercase rounded-md p-3 m-6 font-bold'>{message}</p>
    </div>
  )
}

export default Error
