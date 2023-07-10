import React from 'react'
import "./Wawe.css"
import mtn from "../../../assets/imgs/mtn.png"
import {HiCursorClick} from "react-icons/Hi"
import {HiDownload} from "react-icons/Hi"
import {motion} from "framer-motion"
import poster from "../../../assets/imgs/adopte-poster.jpg"
import posterjpg from "/adopte-poster-download.jpg" 
import { useInView } from "framer-motion";
import {useRef } from 'react';
function Wawe() {
  /* in view */
  const advo = useRef(null);
  const advoVeiw = useInView(advo, { once: true });
  return (
    <div className='container'>
        <div ref={advo} className='adv-des'>

            <div className='adv-holder glass'
            style={{
              transform: advoVeiw ? "none" : "translateX(200px)",
              opacity: advoVeiw ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
          }}>
                <h1>من نحن؟</h1>
                <p>نحن موقع خيري غير ربحي نحاول نشر ثقافة التبني بدل الشراء للحيوانات الأليفة حيث نقوم بدور حلقة الوصل بين الاشخاص الراغبين بإقتناء حيوان أليف والملاجئ  الخيرية التي تستقبل الحيوانات المتخلى عنها وحيوانات الشارع الغير   قادرة على التأقلم حيث يتم اعطائها عناية بيطرية ومن ثم عرضها للتبني</p>
            </div>

            <div className='adv-donate glass'
            style={{
              transform: advoVeiw ? "none" : "translateX(200px)",
              opacity: advoVeiw ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}>
              
                <img loading='lazy' src={mtn} alt="img" />
                <div className='adv-adr'>
                  <p className='adv-t'>بإمكانكم التبرع من خلال  كاش مبايل  على الرقم التالي:</p>
                  <p className='adv-n'>0959124014</p>
                  <a target='_blank' className='adv-a' href="https://cash.mtnsyr.com/#/">تبرع الان<HiCursorClick/></a>
                </div>
              
            </div>


            <div className='adv-poster'
            style={{
              transform: advoVeiw ? "none" : "translateX(200px)",
              opacity: advoVeiw ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}>
              <img loading='eager' src={poster} alt="img" />
            </div>

            <div className='p-download'
            style={{
              transform: advoVeiw ? "none" : "translateX(200px)",
              opacity: advoVeiw ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}><a href={posterjpg}  download={posterjpg}>تحميل البوستر الإعلاني</a><HiDownload/></motion.button>
              </div>
            
            
        </div>
    </div>
  )
}

export default Wawe