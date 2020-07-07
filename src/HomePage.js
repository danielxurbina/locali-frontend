import React from 'react'
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