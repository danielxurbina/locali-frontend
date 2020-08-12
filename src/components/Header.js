import React from 'react';
import './default.css';
import './layout.css';

function Header(){
      return (
      <>
         <header id='home'>
            <div className='row banner'>
               <div className='banner-text'>
                  <h1 className='responsive-headline'>LOCALI</h1>
                  <hr/>
               </div>
            </div>
            <p className='scrolldown'>
               <a className='smoothscroll' href='#about'><i className='icon-down-circle'></i></a>
            </p>
         </header>
      </>
   );
}

export default Header;