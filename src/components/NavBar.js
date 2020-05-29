import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

class NavBar extends React.Component {
    render() { 
        return ( 
            <Navbar color="transparent" light expand="md" bg="light">
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
            </Navbar>
        );
    }
}
 
export default NavBar;