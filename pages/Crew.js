import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data.json'

export default function Crew() {
    const [crewId, setCrewId] = useState(0)
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='crewBackground flex flex-col'>
            <Navbar />

            <div className='crewTitle'><span className='crewTitleNum'>02</span> MEET YOUR CREW</div>

            <div className='flex crewWrapper'>
                
                <div className='crewContainer flex flex-col'>
                    
                        <div className='crewRole'>{data.crew[crewId].role}</div>
                        <div className='crewName'>{data.crew[crewId].name}</div>
                        <div className='crewBio'>{data.crew[crewId].bio}</div>

                        <div className='dotNav flex justify-between'>
                            <button className={`${crewId === 0 ? 'dotActive' : 'dotInactive'}`} onClick={() => setCrewId(0)}></button>
                            <button className={`${crewId === 1 ? 'dotActive' : 'dotInactive'}`} onClick={() => setCrewId(1)}></button>
                            <button className={`${crewId === 2 ? 'dotActive' : 'dotInactive'}`} onClick={() => setCrewId(2)}></button>
                            <button className={`${crewId === 3 ? 'dotActive' : 'dotInactive'}`} onClick={() => setCrewId(3)}></button>
                        </div>
                    
                        

                </div>

                

                <div className='crewImageContainer'>
                    <img src={data.crew[crewId].images.png} className='crewImage'/>
                </div>
            </div>

                    
                
        </div>
    )
}
