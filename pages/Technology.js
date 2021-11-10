import React from 'react'
import Navbar from '../components/Navbar'
import data from '../data.json'

export default function Technology() {
    return (
        <div className='technologyBackground flex flex-col'>
            <Navbar />

            <div className='technologyTitle'><span className='crewTitleNum'>03</span> SPACE LAUNCH 101</div>

            <div className='flex'>
                <div className='techInfoContainer flex'>
                    <div className='selectionDots flex flex-col'> 
                        <div className='selectionActive flex justify-center'><span className='selectionNumActive self-center'>1</span></div>
                        <div className='selectionInactive flex justify-center'><span className='selectionNumInactive self-center'>2</span></div>
                        <div className='selectionInactive flex justify-center'><span className='selectionNumInactive self-center'>3</span></div>
                    </div>
                    <div className='techInfoBody flex flex-col'>
                        <div className='techHeader'>THE TERMINOLOGY...</div>
                        <div className='techInfoTitle'>{data.technology[0].name}</div>
                        <div className='techInfoDescription'>{data.technology[0].description}</div>
                    </div>
                </div>

                <img src={data.technology[0].images.portrait}/>
            </div>
            


        </div>
    )
}
