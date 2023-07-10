import React from 'react'
import "./Apply.css"
import {motion} from "framer-motion"
import { useInView } from "framer-motion";

import {useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Apply() {
    /* in view */
    const inp = useRef(null);
    const inpVeiw = useInView(inp, { once: true });
    /* email js: pw= momokoko123 /testo email */
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hwb3tcd', 'template_kkgqgi8', form.current, 'zDcMKq1j0rsVpEJ_A')
            .then((result) => {
                console.log(result.text);
                console.log("form submited")
                e.target.reset();
                notify();
            }, (error) => {
                console.log(error.text);
                console.log("first")
            });
        };


    /* toast notification */
    const notify = () => toast.success('تم استلام طلبك بنجاح سيتم الرد على طلبك برسالة على ايميلك الشخصي خلال 24 ساعة', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


    /* validation */

    /* الاسم */
    function handlename(e){
        if(e.target.value.length<9){
            e.target.style.color="red";
        } else{
            e.target.style.color="#04022c"
        }
    }

    function dealname(e){
    if(e.target.value.length<9){
        e.target.value="";
        e.target.placeholder="مطلوب 9 محارف على الأقل";
    }
}
/* معرف الخاص */
function handleid(e){
    if(e.target.value>3700 || e.target.value<2000){
        e.target.style.color="red";
    } else{
        e.target.style.color="#04022c"
    }
}

function dealid(e){
if(e.target.value>3700 || e.target.value<2000){
    e.target.value="";
    e.target.placeholder="المعرف غير موجود";
}
}


    /* الرقم الوطني */
    function handlenat(e){
        if(e.target.value.length<7){
            e.target.style.color="red";
        } else{
            e.target.style.color="#04022c"
        }
    }

    function dealnat(e){
    if(e.target.value.length<7){
        e.target.value="";
        e.target.placeholder="مطلوب 7 أرقام على الأقل";
    }
}

    /* الايميل*/
    function handleemail(e){
        if(e.target.value.length<9){
            e.target.style.color="red";
        } else{
            e.target.style.color="#04022c"
        }
    }

    function dealemail(e){
    if(e.target.value.length<9){
        e.target.value="";
        e.target.placeholder="الإيميل غير صحيح";
    }
}

    /* الايميل*/
    function handlenumber(e){
        if(e.target.value.length<10){
            e.target.style.color="red";
        } else{
            e.target.style.color="#04022c"
        }
    }

    function dealnumber(e){
    if(e.target.value.length<10){
        e.target.value="";
        e.target.placeholder="الرقم غير صحيح";
    }
}

    

    return (
    <div className='container'>
        <div ref={inp} className='form-cont'>
        <h1
        style={{
            transform: inpVeiw ? "none" : "translateX(200px)",
            opacity: inpVeiw ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}>تقديم طلب تبني</h1>
        <form ref={form}  onSubmit={sendEmail}>

            <label htmlFor="form-name"
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}>الإسم الثلاثي:</label>
            <input onChange={handlename} onBlur={dealname} id='form-name' type="text" required autoComplete='off' name='user_name' 
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}/>

            <label htmlFor="form-id"
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}>المعرف الخاص بالحيوان:</label>
            <input onChange={handleid} onBlur={dealid} id='form-id' type="number" required autoComplete='off' name='animal_id' 
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}/>

            <label htmlFor="form-nnumber"
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}>الرقم الوطني:</label>
            <input onChange={handlenat} onBlur={dealnat} id='form-nnumber' type="number" required autoComplete='off' name='n_number' 
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}/>

            <label htmlFor="form-email"
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}>ايميل التواصل:</label>
            <input  onChange={handleemail} onBlur={dealemail}id='form-email' type="email" required autoComplete='off' name='c_email' 
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}/>

            <label htmlFor="form-number"
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}>رقم التواصل:</label>
            <input onChange={handlenumber} onBlur={dealnumber} id='form-number' type="number" required autoComplete='off' name='c_number' 
            style={{
                transform: inpVeiw ? "none" : "translateX(200px)",
                opacity: inpVeiw ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}/>

            <motion.button type='submit'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}>إرسال</motion.button>
            
        </form>
        <ToastContainer />
        </div>
    </div>
)
}

export default Apply