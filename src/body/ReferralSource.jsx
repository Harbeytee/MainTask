import React from 'react'
import DonutChart from './DonutChart'
import facebook from '../assets/body/referralSource/facebook.svg'
import instagram from '../assets/body/referralSource/instagram.svg'
import linkedin from '../assets/body/referralSource/linkedIn.svg'
import google from '../assets/body/referralSource/google.svg'


export default function ReferralSource({data}) {

    const colors = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468']
    const style = {
        display: 'flex',
        alignItems : 'center'
    }
    const socials = {facebook: facebook, instagram: instagram, linkedin: linkedin, google: google}
    const countries = data.top_sources?.map((item, i) =>(
       
        <div style={style} key={i}>
            <img className='social-icon' src={socials[item.source.toLowerCase()]} alt={`${item.source} icon`} />
            {item.source} 
            
            <span className='percent'> { item.percent}%</span>
            <div style={{backgroundColor: colors[i]}} className="circle"></div>
        </div>
    ))

    const dataValues = data.top_sources?.map((item, i) => ({value: item.percent, color: colors[i]}))
    
    return (
    <div id='locations'>
        <div className='data'>
            <h4>Top Referral source</h4>
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
