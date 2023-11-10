import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <div>
      <Navbar className='navbar navbar-dark bg-info'>
        <Container>
          <Navbar.Brand href="#home">SoftEdge</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="#features" className='mx-2'>Services</Nav.Link>
            <Nav.Link href="#pricing" className='mx-2'>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar