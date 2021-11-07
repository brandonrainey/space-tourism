import React from 'react'
import Link from 'next/link'


export default function Navbar() {
    return (
        <div className='navContainer flex'>
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="54" height="54"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className='navLine'>

            </div>
            
            <div className='navBackground flex justify-center'>
                <div className='navItemsContainer flex justify-around'>
                    <div className='flex flex-col'>
                         <Link href='/'><a className='navText navHome'>
                            <b>00</b> HOME
                         </a></Link>
                         <div className='homeFocusbar'></div>
                    </div>
                   

                    <div className='flex flex-col'>
                         <Link href='/Destination'><a className='navText navDestination'>
                            <b>01</b> DESTINATION
                        </a></Link>
                        <div className='destinationFocusbar'></div>
                    </div>
                    
                    <div className='flex flex-col'>
                        <div className='navText navCrew'>
                            <b>02</b> CREW
                        </div>
                        <div className='crewFocusbar'></div>
                    </div>
                    
                    <div className='flex flex-col'>
                        <div className='navText navTechnology'>
                            <b>03</b> TECHNOLOGY
                        </div>
                        <div className='techFocusbar'></div>
                    </div>
                    
                </div>

                
            </div>
            
            <div className='navIcon'>

            </div>
        </div>
    )
}
