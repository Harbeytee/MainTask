import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Body from './body/Body'

function App() {
  const [on, setOn] = useState(false)
  
  useEffect(() => {
    window.matchMedia('(min-width:960px)').matches && setOn(true)
    window.addEventListener('resize', () => {
        window.matchMedia('(min-width:960px)').matches ? setOn(true) : setOn(false)
    })
    window.scrollTo({top: 0, left: 0});
}, [])

useEffect(() => {
  on? document.body.style.overflow='hidden' : document.body.style.overflow='hidden';
}, [on])



  return (
    <div className="App">
      <Navbar on={on}/>
      <Body onOff={() => setOn(!on)} on={on}/>
      
    </div>
  )
}

export default App
