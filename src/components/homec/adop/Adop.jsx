import React from 'react'
import "./Adop.css"
import animals from "../../../data/animals.json"
import { useState } from 'react';
import {FcSearch} from "react-icons/fc"
import { useRef } from "react";
import { useInView } from "framer-motion";





function Adop() {
  /* filter */
  const [filtereData,setFiltereData]=useState(animals);
  const search = (e)=> setFiltereData(animals.filter((item)=>item.name.includes(e.target.value)));

  /* in veiw */
  const adoph = useRef(null);
  const adophVeiw = useInView(adoph, { once: true });

  const ser = useRef(null);
  const serVeiw = useInView(ser, { once: true });


  return (
    <>
    <div ref={adoph} className='adop-title'>
        <h1
        style={{
          transform: adophVeiw ? "none" : "translateX(200px)",
          opacity: adophVeiw ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>إبحث عن حيوانك الأليف</h1>
    </div>

    <div className='container'>
      <div ref={ser} className='adop-list'>

        <div  className='adop-search'
        style={{
          transform: adophVeiw ? "none" : "translateX(200px)",
          opacity: adophVeiw ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
          <label htmlFor="search"><FcSearch className='sea-icon'/></label>
          <input id='search' type="search" placeholder='مثال: قطة أو حلب' onChange={search} autoComplete='off'/>
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