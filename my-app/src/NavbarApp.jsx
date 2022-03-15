import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class NavBarApp extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand className={"ms-3"}>Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink exact to="/" className="nav-link">News</NavLink>
                        <NavLink to="/todos" className="nav-link">ToDo lists</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBarApp;