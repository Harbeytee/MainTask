import React from 'react'
import DonutChart from './DonutChart'
import nigeria from '../assets/body/locations/nigeria.png'
import finland from '../assets/body/locations/finland.png'
import germany from '../assets/body/locations/germany.png'
import ghana from '../assets/body/locations/ghana.png'
import uk from '../assets/body/locations/uk.png'


export default function Locations({data}) {

    const colors = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468']
    const style = {
        display: 'flex',
        alignItems : 'center'
    }
    const country = {
        nigeria: nigeria,
        finland: finland,
        germany: germany,
        ghana: ghana,
        'united kingdom': uk,
    }

   
    
    const dataValues = data.top_locations?.map((item, i) => ({value: item.percent, color: colors[i]}))
    

    const countries = data.top_locations?.map((item, i) =>(
        
        <div style={style} key={i}>
            <img className='country-icon' src={country[item.country.toLowerCase()]} alt={`${item.country} icon`} />
            {item.country} 
            <span className='percent'> { item.percent}%</span>
            <div style={{backgroundColor: colors[i]}} className="circle"></div>
        </div>
    ))
    
    return (
    <div id='locations'>
        <div className='data'>
            <h4>Top Locations</h4>
            {countries}
           
        </div>

        <div className='donut-box'>
            <p className='red-text'>View full reports</p>
            
            <DonutChart 
            className='donut-chart'
            data={dataValues}
            width={180}
            height={180}
            />

        </div>
    </div>
  )
}
