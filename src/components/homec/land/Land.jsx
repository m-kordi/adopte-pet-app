import React from 'react'
import dogimg from "../../../assets/imgs/a.png"
import "./Land.css"
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'
import {FaCat} from "react-icons/fa"
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
  return (
    <>
    <div className='container'>
      <div className='dec-land'>

          <div className='text-land'>
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

          <div className='img-land'>
            <img loading='eager' src={dogimg} alt="img" />
          </div>

          
      </div>
    </div>
    <div className="spikes"></div>
    </>
  )
}

export default Land