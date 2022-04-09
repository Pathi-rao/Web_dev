import React from "react"
import {Container} from "react-bootstrap"
import {Navbar,Nav} from "react-bootstrap"
import {withRouter} from "react-router-dom"

class NavBar extends React.Component{
    render(){
        return (
            <Navbar bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        )
    }
}

export default withRouter(NavBar)