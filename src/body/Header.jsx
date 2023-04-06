import React, { useState } from 'react'

export default function Header({onOff, on}) {
  const [index, setIndex] = useState(5)

  function makeActive(val) {
    return val == index ? 'active' : 'inactive'
  }
  return (
    <header id='header'>
      
      <h2>Dashboard</h2>
      <div onClick={() =>onOff()} className="hamburger">
        <div style={{transform: on? 'translateY(2.5px) rotate(45deg)' : 'rotate(0)'}} className="line"></div>
        <div style={{transform: on? 'translateY(-2.5px) rotate(-45deg)' : 'rotate(0)'}} className="line"></div>
      </div>

      
      
      <div className="split">
        <div>
          
          
          <h3>Good morning, Blessing ⛅️</h3> 
          <p>Check out your dashboard summary.</p>
        </div>
        

        <p style={{color: '#FF5403', fontSize: '16px'}}>View analytics</p>

      </div>
      
      <div className="days">

        <p onClick={() => setIndex(1)} className={makeActive(1)}>1 Day</p>
        <p onClick={() => setIndex(2)} className={makeActive(2)}>3 Days</p>
        <p onClick={() => setIndex(3)} className={makeActive(3)}>7 Days</p>
        <p onClick={() => setIndex(4)} className={makeActive(4)}>30 Days</p>
        <p onClick={() => setIndex(5)} className={makeActive(5)}>All Time</p>
        <p onClick={() => setIndex(6)} className={makeActive(6)}>Custom Date</p>
      </div>
      
      
    </header>
  )
}
