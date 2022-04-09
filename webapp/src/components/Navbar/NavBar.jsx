import React from "react"
import {Container} from "react-bootstrap"
import {Navbar,Nav} from "react-bootstrap"
import {withRouter} from "react-router-dom"
import navbar_logo from "./dog_pic.jpg"


class NavBar extends React.Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark">
            <Container fluid>
            <img src={navbar_logo} alt="Page logo" style={{ width: "100px", height: "45px" }}/> 
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/navbar_one">Navbar1</Nav.Link>
              <Nav.Link href="/navbar_two">Navbar2</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default withRouter(NavBar)