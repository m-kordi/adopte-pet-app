import React from 'react'
import dogimg from "../../../assets/imgs/a.png"
import "./Land.css"
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import { useRef } from "react";
import { useInView } from "framer-motion";


function Land() {
  /* navigat to url */
  const navme = useNavigate()
  function handleNavme(){
    navme("/adopte");
  }
  const navmetow = useNavigate()
  function handleNavmetow(){
    navmetow("/advertis");
  }

  /* in veiw */
  const land = useRef(null);
  const landVeiw = useInView(land, { once: true });

  return (
    <>
    <div className='container'>
      <div ref={land} className='dec-land'>

          <div className='text-land'
          style={{
            transform: landVeiw ? "none" : "translateY(200px)",
            opacity: landVeiw ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}>
            <h1>أليف | ALEEF</h1>
            <h3>اول موقع في سوريا لتبني الحيوانات الأليفة</h3>
            <p>الموقع مجاني بشكل كامل ويسعى لنشر ثقافة التبني بدل الشراء</p>

            <div className='butten-land'>
            <motion.button className='fbtn-land' onClick={handleNavme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>طلب تبني</motion.button>
            <motion.button className='sbtn-land' onClick={handleNavmetow} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>تبرع الان</motion.button>
            </div>
            
          </div>

          <div className='img-land'
          style={{
            transform: landVeiw ? "none" : "translateY(200px)",
            opacity: landVeiw ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}>
            <img loading='eager' src={dogimg} alt="img"/>
          </div>

          
      </div>
    </div>
    <div className="spikes"></div>
    </>
  )
}

export default Land