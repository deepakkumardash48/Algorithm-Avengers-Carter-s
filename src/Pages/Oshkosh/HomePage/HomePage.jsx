import React from 'react'
import Card from '../Card/Card'
import './HomePage.css'
import Navbar from '../../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const HomePage = () => {
    
    return (
        <>
    <div className='HomePage_logo'>
        <img className='logo'
            src='https://images.ctfassets.net/621t91s0mnkp/db8TnTIGcpLSMlZkV6PJT/11d85517924ee142fa20526cac80cf17/OshKoshBgosh-logo-mobile.png?fm=webp&w=768' alt='' />
    </div>
    
    <Link to={'/productpage'}>
    <div className='denim'>
        <img id='dimg' src='https://images.ctfassets.net/621t91s0mnkp/1ySIcyfS1SJsPztLeTG45T/422c65fcfd930790302ab36a6e537beb/bog2-denim-price-mobile.svg?fm=webp&w=768' alt='' />
    </div>
    </Link>
    <div style={{height:'1rem'}}></div>
    <div className='shorts'>
            <h3>Buy your favourite one //</h3> 
            <img id='shortImg' src="https://images.ctfassets.net/621t91s0mnkp/2LR6MuM8JmD8hlQcijbDQf/d7b55bce369e296245042d9f8934bd69/car-071624-bts-hero-40off-desktop.png?fm=webp&w=1366" alt="" />   
        
    </div>
    <Card/>
    </>
)
}

export default HomePage