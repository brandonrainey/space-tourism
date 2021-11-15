import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import data from '../data.json'

export default function Technology() {
    const [techId, setTechId] = useState(0)
    

    return (
        <div className='technologyBackground flex flex-col'>
            <Navbar />

            <div className='technologyTitle'><span className='crewTitleNum'>03</span> SPACE LAUNCH 101</div>

            <div className='flex techWrapper'>
                <div className='techInfoContainer flex'>
                    <div className='selectionDots flex flex-col justify-between'> 
                        <button className={`${techId === 0 ? 'selectionActive' : 'selectionInactive'} flex justify-center`} onClick={() => setTechId(0)}><span className={`${techId === 0 ? 'selectionNumActive' : 'selectionNumInactive'} self-center`}>1</span></button>
                        <button className={`${techId === 1 ? 'selectionActive' : 'selectionInactive'} flex justify-center`} onClick={() => setTechId(1)}><span className={`${techId === 1 ? 'selectionNumActive' : 'selectionNumInactive'} self-center`}>2</span></button>
                        <button className={`${techId === 2 ? 'selectionActive' : 'selectionInactive'} flex justify-center`} onClick={() => setTechId(2)}><span className={`${techId === 2 ? 'selectionNumActive' : 'selectionNumInactive'} self-center`}>3</span></button>
                    </div>
                    <div className='techInfoBody flex flex-col'>
                        <div className='techHeader'>THE TERMINOLOGY...</div>
                        <div className='techInfoTitle'>{data.technology[techId].name}</div>
                        <div className='techInfoDescription'>{data.technology[techId].description}</div>
                    </div>
                </div>

                <img src={data.technology[techId].images.portrait} className='techImage'/>
                <img src={data.technology[techId].images.landscape} className='techImage2'/>
            </div>
            


        </div>
    )
}
