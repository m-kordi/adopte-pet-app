import React from 'react'
import "./Wawe.css"
import mtn from "../../../assets/imgs/mtn.png"
import {HiCursorClick} from "react-icons/Hi"
function Wawe() {
  return (
    <div className='container'>
        <div className='adv-des'>

            <div className='adv-holder glass'>
                <h1>من نحن؟</h1>
                <p>نحن موقع خيري غير ربحي نحاول نشر ثقافة التبني بدل الشراء للحيوانات الأليفة حيث نقوم بدور حلقة الوصل بين الاشخاص الراغبين بإقتناء حيوان أليف والملاجئ  الخيرية التي تستقبل الحيوانات المتخلى عنها وحيوانات الشارع الغير   قادرة على التأقلم حيث يتم اعطائها عناية بيطرية ومن ثم عرضها للتبني</p>
            </div>

            <div className='adv-donate glass'>
              
                <img src={mtn} alt="img" />
                <div className='adv-adr'>
                  <p className='adv-t'>بإمكانكم التبرع من خلال  كاش مبايل  على الرقم التالي:</p>
                  <p className='adv-n'>0959124014</p>
                  <a target='_blank' className='adv-a' href="https://cash.mtnsyr.com/#/">تبرع الان<HiCursorClick/></a>
                </div>
              
            </div>
            
        </div>
    </div>
  )
}

export default Wawe