import React from 'react'
import './Styles/NavCenter.css';
export default function NavCenter() {
  return (
    <div className='nav-center' style={{cursor:'pointer'}}>
    <input type="text" name="" id="" placeholder='Search' />
      <div className='nav-search'>
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className="mic">
    <i class="fa-solid fa-microphone"></i>
    </div>
    </div>
  )
}
