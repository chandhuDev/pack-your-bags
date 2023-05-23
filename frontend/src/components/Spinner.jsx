import React from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const Spinner = ({message}) => {
 return (
  <div className='flex flex-col items-center'>
      <CircleLoader
        color="#008080"
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    <p className='text-2xl font-semibold'>{message}</p>
  </div>
  )
}

export default Spinner
