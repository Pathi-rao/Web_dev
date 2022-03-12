import React, { Component } from 'react'
import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import navbar_logo from "./dog_pic.jpg"

export class Navigation_bar extends Component { // Extending react component class

    render() {
        return (
            <Navbar bg="primary" variant="dark">
            <Container>
            <img src={navbar_logo} alt="Page logo" style={{ width: "100px", height: "45px" }}/> 
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Title2</Nav.Link>
            <Nav.Link href="#pricing">Title3</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        )
}
}
export default Navigation_bar