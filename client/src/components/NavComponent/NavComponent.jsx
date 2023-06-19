
import React from 'react'
import {Navbar, Nav,Container}from "react-bootstrap";
import {Link}from "react-router-dom";
import { toggleFalse } from '../../JS/actions/editActions';
import { useDispatch } from 'react-redux';
import './NavComponent'


const NavComponent = () => {
  const dispatch = useDispatch();
  const handleEdit = ()=>{
    dispatch(toggleFalse());
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" style={{color:"grey", textDecoration:"none"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/contacts"style={{color:"grey", textDecoration:"none"}}>Contacts List</Link></Nav.Link>
            <Nav.Link onClick={handleEdit}><Link to="/add" style={{color:"grey", textDecoration:"none"}}>Add Contacts</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavComponent
