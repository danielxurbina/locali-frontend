import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';

class NavBar extends React.Component {

    render() { 
        return ( 
            <Navbar color="transparent" light expand="md">
                <NavbarBrand href="/">Locali</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/login">Log In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/signup">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/homepage">Homepage</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/events">Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/profile/:id">Profile Page</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Sign Out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
         );
    }
}
 
export default NavBar;