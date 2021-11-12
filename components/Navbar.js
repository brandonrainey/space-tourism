import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Navbar() {
    const router = useRouter()
    
    const [navItem, setNavItem] = useState()

    useEffect(() => {
        if (router.pathname === '/') {
            setNavItem(0)
        }
        if (router.pathname === '/Destination') {
            setNavItem(1)
        }
        if (router.pathname === '/Crew') {
            setNavItem(2)
        }
        if (router.pathname === '/Technology') {
            setNavItem(3)
        }
        
        
    }, [navItem])
    
    return (
        <div className='navContainer flex'>
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="54" height="54"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className='navLine'>

            </div>
            
            <div className='navBackground flex justify-center'>
                <div className='navItemsContainer flex justify-around'>
                    <div className='flex flex-col'>
                         <Link href='/'><a onClick={() => setNavItem(0)} className='navText navHome' >
                            <b className='navNumber'>00</b> HOME
                         </a></Link>
                         <div className={`${navItem === 0 ? 'homeFocusbarSelected' : 'homeFocusbar'}`}></div>
                    </div>
                   

                    <div className='flex flex-col'>
                         <Link href='Destination'><a onClick={() => setNavItem(1)} className='navText navDestination' >
                            <b className='navNumber'>01</b> DESTINATION
                        </a></Link>
                        <div className={`${navItem === 1 ? 'destinationFocusbarSelected' : 'destinationFocusbar'}`}></div>
                    </div>
                    
                    <div className='flex flex-col'>
                        <Link href='/Crew' onClick={() => setNavItem(2)}><a className='navText navCrew' >
                            <b className='navNumber'>02</b> CREW
                        </a></Link>
                        <div className={`${navItem === 2 ? 'crewFocusbarSelected' : 'crewFocusbar'}`}></div>
                    </div>
                    
                    <div className='flex flex-col'>
                        <Link href='/Technology' onClick={() => setNavItem(3)}><a className='navText navTechnology' >
                            <b className='navNumber'>03</b> TECHNOLOGY
                        </a></Link>
                        <div className={`${navItem === 3 ? 'techFocusbarSelected' : 'techFocusbar'}`}></div>
                    </div>
                    
                </div>

                
            </div>
            
            <div className='navIcon'>

            </div>
        </div>
    )
}
