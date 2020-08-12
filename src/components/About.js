import React from 'react';
import './default.css';

function About(){
   
   return (
      <section id='about'>
         <div className='row'>
            <div className='three columns'>
               <img className='profile-pic'  src='https://ca.slack-edge.com/T02MD9XTF-UTV12LVL6-54082a1d620c-512' alt='daniel' />
            </div>
            <img className='profile-pic'  src='https://ca.slack-edge.com/T02MD9XTF-URUPJ4A9H-cc8ebbaf4e79-512' alt='kelly' />
            <div className='nine-columns main-col'>
               <h2 className='description-title'>Meet the creators</h2>
               <p className='description'>
                  Hello! Our names are Kelly and Daniel and we created Locali to serve as a fun environment to find and join in local events. 
                  You can create an event or RSVP to an event. Thank you for visiting our project, enjoy!
               </p>
            </div>
         </div>
      </section>
   );
}

export default About;