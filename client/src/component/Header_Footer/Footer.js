import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/free-solid-svg-icons/faCompass';
import faPhone from '@fortawesome/free-solid-svg-icons/faPhone';
import faClock from '@fortawesome/free-solid-svg-icons/faClock';
import faEnvelope from '@fortawesome/free-solid-svg-icons/faEnvelope';
const Footer = () => {
   return (
       <footer className="bck_b_dark">
         <div className="container">
           <div className="logo">
             WAVES
           </div>
           <div className="wrapper">
             <div className="left">
                   <h2> Content Information</h2>
                   <div className="business_nfo">
                       <div className="tag">
                           <FontAwesomeIcon 
                            icon={faCompass}
                            className="icon"
                           />
                           <div className="nfo">
                               <div>Address</div>
                               <div>Kramer - 3423</div>
                           </div>
                       </div>
                       <div className="tag">
                           <FontAwesomeIcon 
                            icon={faPhone}
                            className="icon"
                           />
                           <div className="nfo">
                               <div>Phone</div>
                               <div>343-53423-243</div>
                           </div>
                       </div>

                       <div className="tag">
                           <FontAwesomeIcon 
                            icon={faClock}
                            className="icon"
                           />
                           <div className="nfo">
                               <div>Working Houre</div>
                               <div>sun :8 am</div>
                           </div>
                       </div>

                       <div className="tag">
                           <FontAwesomeIcon 
                            icon={faEnvelope}
                            className="icon"
                           />
                           <div className="nfo">
                               <div>Email</div>
                               <div>Waves@gmail.com</div>
                           </div>
                       </div>
                 </div>
             </div>
             <div className="left">
                <h2>Be the First YOu know</h2>
                <div>Get all Information about waves </div>
             </div>
           </div>
         </div>
       </footer>
   )
}

export default Footer;