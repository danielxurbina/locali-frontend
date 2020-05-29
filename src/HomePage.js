import React from 'react'
// import Header from './components/Header.js';
// import About from './components/About.js';
// import Testimonials from  './components/Testimonials.js';
// import ContactUs from './components/ContactUs.js';
// import Footer from './components/Footer.js';
import { Header, About} from './components/'

class HomePage extends React.Component {
    render() { 
        return ( 
            <div>
                <Header />
                <About />
            </div>
         )
    }
}
 
export default HomePage;