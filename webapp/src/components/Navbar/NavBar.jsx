import React from "react"
import {Container, NavDropdown} from "react-bootstrap"
import {Navbar,Nav} from "react-bootstrap"
import {withRouter} from "react-router-dom"
import navbar_logo from "./dog_pic.jpg"
import './Navbar.css'


class NavBar extends React.Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark">
            <Container fluid>
            <img src={navbar_logo} alt="Page logo" style={{ width: "100px", height: "45px" }}/> 
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/navbar_one">Debug</Nav.Link>
              <NavDropdown title="Gitlab" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">MTU</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">tf2seg</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Gitlab</NavDropdown.Item>

        </NavDropdown>
            </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default withRouter(NavBar)