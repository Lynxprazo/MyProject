import React from 'react'
import "./logo.css"

const Logo = () => {
  return (
    <div className='container'>
        {Array.from({length:22},(_,i)=>(
            <div className='circle' style={{ ['--i' as string]: i}} key={i}></div>
        ))}
      
    </div>
  )
}

export default Logo
