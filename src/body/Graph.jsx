import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'
import hook from './hook'

export default function Graph({data}) {
  
  const {options, getDate} = hook()

  
  
  const points = Object.entries(data.graph_data.views).map((item, i) => (
        {x: i, y:item[1]}
  )) 
  
  
  const p = points.map(item => (item.y))
  const allTime = Math.max(...Object.values(p))
  
  
    const labels = getDate(data)
    
    let sampleData = {
      labels: labels,
      
      datasets: [
        {
         label: 'hhh',
          data:p,
          borderColor: '#FF5403',
          fill: true,
          responsive: true,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          borderWidth: 1,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx
            const gradient = ctx.createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0, 'rgba(255, 84, 3, 0.2)');
            gradient.addColorStop(0.5, 'rgba(255, 84, 3, 0.15)');
            gradient.addColorStop(0.8, 'rgba(255, 84, 3, 0)');
            return gradient

          }
          
        }
      ],
      
    }

    

    

  return (
    <div id='graph'>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <h4>Page views</h4>
            <p className='letterI'>i</p>
        </div>
        <p className='small-text'>All time</p>
        
      
      
        
      
        <p className="all-time">{allTime}</p>
        <Line options={options}
        data={sampleData}/>
       
      
      

    </div>
  )
}
