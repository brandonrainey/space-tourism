import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import data from '../data.json'
import img from '../assets/destination/image-moon.png'

export default function Destination() {

    useEffect(() => {
        console.log(data.destinations[0].name)
    },[])
    return (
        <div className='destinationBackground flex flex-col'>
            <Navbar />
            <div className='destinationTitle'><span className='destinationTitleNum'>01</span> PICK YOUR DESTINATION</div>
            <div className='flex'>
                
                <div className='planetImg'>
                    <img src={'../img/image-moon.png'}/>
                </div>
                <div className='destinationContainer'>
                    <div className='destinationNav'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='planetName'>

                    </div>
                    <div className='planetDescription'>

                    </div>
                    <div className='destinationLine'>

                    </div>
                    <div className='footerInfo'>
                        <div className='planetDistance'>

                        </div>
                        <div className='travelTime'>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
