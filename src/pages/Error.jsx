import React from 'react'
import "./Error.css"
import imgerorr from "../assets/imgs/myerror.gif"
import { useRef } from "react";
import { useInView } from "framer-motion";


function Error() {
  const errori = useRef(null);
  const erroriView = useInView(errori, { once: true });
  return (
    <div className='erorr-page'>
    <div className='container'>
      <div ref={errori}>
      <div className='erorr-cont'
      style={{
        transform: erroriView ? "none" : "translateX(200px)",
        opacity: erroriView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <img src={imgerorr} alt="#" />
        <h1>الصفحة غير موجودة ...</h1>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Error