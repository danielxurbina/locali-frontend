import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

class NavBar extends React.Component {
    render() { 
        return ( 
            <Navbar color="transparent" light expand="md">
                <NavbarBrand to="/">Locali</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/login">Log In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/homepage">Homepage</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/events">Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile/:id">Profile Page</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">Sign Out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
 
export default NavBar;