import React from 'react'
// import {NavLink} from 'react-router-dom'
import {Link} from 'react-router-dom'
import "./navbar.css";


class NavBar extends React.Component {
    render() { 
        return ( 
              <div>
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Montserrat"
                rel="stylesheet"
              />
          
              <nav className="ads-c-navbar ads-c-navbar--fixed">
                <section className="ads-c-navbar__navbar-brand">
                  <span className="ads-c-navbar__navbar-brand-icon">
                    <svg
                      className="ads-c-navbar__brand-logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 106.27"
                    >
                      <polygon
                        className="polyfill"
                        points="0 0 29.32 50.79 117.3 0 0 0"
                      />
                      <polygon points="120 4.69 32.03 55.47 61.35 106.27 120 4.69 3.7 20.3" />
                    </svg>
                  </span>
                  <span className="ads-c-navbar__navbar-brand-title">LOCALI</span>
                </section>
          
                <section className="ads-c-navbar__navbar-menu">
                  <ul className="ads-c-navbar__navbar-menu-items">
                    <Link to="/"><li className="ads-c-navbar__navbar-menu-item">Locali</li></Link>
                    <Link to="/login"><li className="ads-c-navbar__navbar-menu-item">Log In</li></Link>
                    <Link to="/signup"><li className="ads-c-navbar__navbar-menu-item">Sign Up</li></Link>
                    <Link to="/homepage"><li className="ads-c-navbar__navbar-menu-item">Homepage</li></Link>
                    <Link to="/events"><li className="ads-c-navbar__navbar-menu-item">Events</li></Link>
                  </ul>
                </section>
          
                <section className="ads-c-navbar__navbar-actions">
                  <div className="ads-c-navbar__navbar-actions-item">
                      
                    <Link to="/profile/:id"><i className="material-icons">account_circle</i></Link>
                  </div>
                </section>
              </nav>
            </div>
        );
    }
}

export default NavBar;

{/* <Navbar color="transparent" light expand="md" bg="light">
<NavbarBrand to="/" style={{fontSize: 35}}>Locali</NavbarBrand>
<Nav className="mr-auto" navbar>
    <NavItem>
        <NavLink to="/login" style={{marginRight: 10}}>Log In</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/signup" style={{marginRight: 10}}>Sign Up</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/homepage" style={{marginRight: 10}}>Homepage</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/events" style={{marginRight: 10}}>Events</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/profile/:id" style={{marginRight: 10}}>Profile Page</NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/" style={{marginRight: 10}}>Sign Out</NavLink>
    </NavItem>
</Nav>
</Navbar> */}