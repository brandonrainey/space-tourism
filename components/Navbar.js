import React, { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Navbar({ navItem, setNavItem }) {

    useEffect(() => {
        console.log(navItem)
        switch (window.location.pathname) {
            case '/':
                () => setNavItem('home')
                break;
            case '/Destination':
                () => setNavItem('destination')
                break;
        }
    })
    
    return (
        <div className='navContainer flex'>
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="54" height="54"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className='navLine'>

            </div>
            
            <div className='navBackground flex justify-center'>
                <div className='navItemsContainer flex justify-around'>
                    <div className='flex flex-col'>
                         <Link href='/' onClick={() => setNavItem('home')}><a className='navText navHome' >
                            <b>00</b> HOME
                         </a></Link>
                         <div className={`${navItem === 'home' ? 'homeFocusbarSelected' : 'homeFocusbar'}`}></div>
                    </div>
                   

                    <div className='flex flex-col'>
                         <Link href='Destination' onClick={() => setNavItem('destination')}><a className='navText navDestination' >
                            <b>01</b> DESTINATION
                        </a></Link>
                        <div className={`${navItem === 'destination' ? 'destinationFocusbarSelected' : 'destinationFocusbar'}`}></div>
                    </div>
                    
                    <div className='flex flex-col'>
                        <Link href='/Crew' onClick={() => setNavItem('crew')}><a className='navText navCrew' >
                            <b>02</b> CREW
                        </a></Link>
                        <div className={`${navItem === 'crew' ? 'crewFocusbarSelected' : 'crewFocusbar'}`}></div>
                    </div>
                    
                    <div className='flex flex-col'>
                        <Link href='/Technology' onClick={() => setNavItem('technology')}><a className='navText navTechnology' >
                            <b>03</b> TECHNOLOGY
                        </a></Link>
                        <div className={`${navItem === 'technology' ? 'techFocusbarSelected' : 'techFocusbar'}`}></div>
                    </div>
                    
                </div>

                
            </div>
            
            <div className='navIcon'>

            </div>
        </div>
    )
}
