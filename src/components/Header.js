import React from 'react';
import './default.css'
import './layout.css'

class Header extends React.Component {
   render() {
      return (
      <React.Fragment>
         <header id="home">
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">LOCALI</h1>
                  {/* <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Welcome to Locali!</h3> */}
                  <hr/>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
         </header>
      </React.Fragment>
   );
   }
}

export default Header

// <img src="https://fontmeme.com/permalink/200529/fd16482942f9012f1f5996e0c4021627.png" alt="tex-gyre-termes-font" border="0"></img>