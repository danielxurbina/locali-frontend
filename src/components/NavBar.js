import React from 'react'
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
              <Link to='/' ><section className="ads-c-navbar__navbar-brand">
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
                </section></Link>
                {this.props.currentUser === null ?
                <>
                <section className="ads-c-navbar__navbar-menu">
                  <ul className="ads-c-navbar__navbar-menu-items">
                    <Link to="/login"><li className="ads-c-navbar__navbar-menu-item">Log In</li></Link>
                    <Link to="/signup"><li className="ads-c-navbar__navbar-menu-item">Sign Up</li></Link>
                  </ul>
                </section>
                </>
                :
                <>
                <section className="ads-c-navbar__navbar-menu">
                  <ul className="ads-c-navbar__navbar-menu-items">
                    <Link to="/homepage"><li className="ads-c-navbar__navbar-menu-item">Homepage</li></Link>
                    <Link to="/events"><li className="ads-c-navbar__navbar-menu-item">Events</li></Link>
                    <Link to="/"><li className="ads-c-navbar__navbar-menu-item" onClick={this.props.handleLogout}>Logout</li></Link>
                  </ul>
                </section>
                <section className="ads-c-navbar__navbar-actions">
                  <div className="ads-c-navbar__navbar-actions-item">
                    <Link to="/profile/:id"><i className="material-icons">account_circle</i></Link> 
                  </div>
                </section>
                </>
              }
              </nav>
            </div>
        );
    }
}

export default NavBar;

