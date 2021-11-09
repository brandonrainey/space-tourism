import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data.json'


export default function Destination() {

    const [planet, setPlanet] = useState(0)

    
    return (
        <div className='destinationBackground flex flex-col'>
            <Navbar />

            <div className='destinationTitle'><span className='destinationTitleNum'>01</span> PICK YOUR DESTINATION</div>

            <div className='flex'>
                
                <div className='planetImg'>
                    <img src={data.destinations[planet].images.png}/>
                </div>

                <div className='destinationContainer'>
                    <div className='destinationNav flex justify-between'>
                        <div className='flex flex-col h-8 justify-center'>
                            <button onClick={() => setPlanet(0)} className='planetNavText navMoon'>Moon</button>
                            <div className={`${planet === 0 ? 'moonFocusbarSelected' : 'moonFocusbar'}`}></div>
                        </div>
                        
                        <div className='flex flex-col h-8'>
                            <button onClick={() => setPlanet(1)} className='planetNavText navMars'>Mars</button>
                            <div className={`${planet === 1 ? 'marsFocusbarSelected' : 'marsFocusbar'}`}></div>
                        </div>
                        
                        <div className='flex flex-col h-8'>
                            <button onClick={() => setPlanet(2)} className='planetNavText navEuropa'>Europa</button>
                            <div className={`${planet === 2 ? 'europaFocusbarSelected' : 'europaFocusbar'}`}></div>
                        </div>
                        
                        <div className='flex flex-col h-8'>
                            <button onClick={() => setPlanet(3)} className='planetNavText navTitan'>Titan</button>
                            <div className={`${planet === 3 ? 'titanFocusbarSelected' : 'titanFocusbar'}`}></div>
                        </div>
                        

                    </div>
                    <div className='planetName'>
                        {data.destinations[planet].name}
                    </div>
                    <div className='planetDescription'>
                        {data.destinations[planet].description}
                    </div>
                    <div className='destinationLine'>

                    </div>
                    <div className='footerInfo flex'>
                        <div className='planetDistance flex flex-col'>
                            <p className='avgDistance'>AVG. DISTANCE</p>
                            <div className='distanceValue'>
                               {data.destinations[planet].distance} 
                            </div>
                        </div>
                        <div className='travelTime flex flex-col'>
                            <p className='avgDistance'>EST. TRAVEL TIME</p>
                            <div className='distanceValue'>
                                {data.destinations[planet].travel}
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            
        </div>
    )
}
