import React from 'react'
import './Navbar.scss'
import logo from '../assets/navbar/mainstackLogo.svg'
import dashboard from '../assets/navbar/dashboardLogo.svg'
import item1 from '../assets/navbar/item1.svg'
import item2 from '../assets/navbar/item2.svg'
import item3 from '../assets/navbar/item3.svg'
import item4 from '../assets/navbar/item4.svg'
import item5 from '../assets/navbar/item5.svg'
import item6 from '../assets/navbar/item6.svg'
import item7 from '../assets/navbar/item7.svg'
import item8 from '../assets/navbar/item8.svg'
import user from '../assets/navbar/user.svg'


export default function Navbar({on}) {
   
  return (
    <nav style={{transform: on ? 'translateY(0)' : 'translateY(-100%)'}} id='navbar'>
        <img src={logo} alt="mainstack logo, blocks joined together to form an m shape" className="mainstack-logo" />

        <span style={{color: '#FF5403'}}>
            <img src={dashboard} alt="" className="icon" />
            Dashboard
        </span>
        

        <span>
            <img src={item1} alt="" className="icon" />
            Item 1
        </span>

        <span>
            <img src={item2} alt="" className="icon" />
            Item 2
        </span>

        <span>
            <img src={item3} alt="" className="icon" />
            Item 3
        </span>

        <h5>OTHERS 1</h5>

        <span>
            <img src={item4} alt="" className="icon" />
            Item 4
        </span>

        <span>
            <img src={item5} alt="" className="icon" />
            Item 5
        </span>

        <h5>OTHERS 2</h5>
        <span>
            <img src={item6} alt="" className="icon" />
            Item 6
        </span>

        <span>
            <img src={item7} alt="" className="icon" />
            Item 7
        </span>

        <span>
            <img src={item8} alt="" className="icon" />
            Item 8
        </span>

        <span className="user">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img src={user} alt="image of user" className="user-img" />
                Blessing Daniels
                

            </div>
            <p className="kebab">
             ...
            </p>
           
            
        </span>

    </nav>
  )
}
