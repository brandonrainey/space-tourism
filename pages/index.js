import React, { useState } from "react"
import Navbar from "../components/Navbar"



export default function Home() {
  

  

  return (
    <div className='homeBackground flex'>
      <Navbar 
        
      />
      <div className='homeTextContainer flex flex-col'>
        <p className='homeText1'>
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p className='homeText2'>
          SPACE
        </p>
        <p className='homeText3'>
          Let's face it; if you want to go to spoace, you might as well
          genuinely go to outer spoace and noty hover kind of on the
          edge of it. Well sit back, and relax because we'll give you a
          truly out of htis world experience!
        </p>
      </div>
      <div className='exploreCircle'>
        <p className='exploreText'>EXPLORE</p>
      </div>
    </div>
  )
}
