import React, {useEffect, useState} from 'react'
import Header from './Header'
import Graph from './Graph'
import Locations from './Locations'
import ReferralSource from './ReferralSource'
import './Body.scss'

import spinner from '../assets/body/spinner.gif'

export default function Body({onOff, on}) {
  const [data2, setData2] = useState([])
  useEffect(() => {
    fetch("https://fe-task-api.mainstack.io/")
    .then(response => response.json())
    .then(result => {setData2(result)})
  },[])

   
  
  return (
    <div id='body'>
        <Header onOff={onOff} on={on}/>
        {data2.length == 0 || data2.graph_data === undefined 
        ?
        <div style={{display: 'grid', placeItems: 'center', paddingTop: '2rem'}}>
          <img className='spinner2'  src={spinner} alt="" />
        </div>
       :
        <>
          <Graph data={data2}/>
          
          <div className='split2'>
              <Locations data={data2}/>
              <ReferralSource data={data2}/>
          </div>
        </>
        
        }
       
    </div>
  )
}
