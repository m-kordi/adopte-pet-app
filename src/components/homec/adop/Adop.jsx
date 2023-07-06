import React from 'react'
import "./Adop.css"
import animals from "../../../data/animals.json"
import { useState } from 'react';
import {FcSearch} from "react-icons/fc"


function Adop() {
  const [filtereData,setFiltereData]=useState(animals);
  const search = (e)=> setFiltereData(animals.filter((item)=>item.name.includes(e.target.value)));
  return (
    <>
    <div className='adop-title'>
        <h1>إبحث عن حيوانك الأليف</h1>
    </div>

    <div className='container'>
      <div className='adop-list'>

        <div className='adop-search'>
          <label htmlFor="search"><FcSearch className='sea-icon'/></label>
          <input id='search' type="search" placeholder='مثال: قطة' onChange={search}/>
        </div>

        <div className='adop-container'>
          {filtereData.map((el)=>{
            return(
            <div className='adop-card' key={el.id}>
              <img loading='lazy' src={el.img} alt="img" />
              <div className='adop-intr'>
                <h1 className='adop-h'>{el.name}</h1>
                <h3 className='adop-numb'>{`المعرف الخاص: ${el.id}`}</h3>
                <p className='adop-p'>{el.exp}</p>
                
              </div>
              
            </div>
            )
          })}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Adop