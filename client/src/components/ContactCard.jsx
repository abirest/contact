import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import{getoneContact, deleteContact, getContacts} from "../JS/actions/contactActions";
import { toggleTrue } from '../JS/actions/editActions';

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  const getContacts= ()=>{
    dispatch(getoneContact(contact._id))
  };

const handleDelete=()=>{
  dispatch(deleteContact(contact._id))
}
 const handleEdit=()=>{
  dispatch(toggleTrue())
 }
  return (
    <Card style={{ width: '15rem',height:'28rem',margin:"1rem", }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
      <Card.Body>
        <Card.Title>Name:{contact.name}</Card.Title>
        <Card.Text>
         Email:{contact.email}
        </Card.Text>
        <Card.Text>
         Phone:{contact.phone}
        </Card.Text>
        <Button variant="danger" style={{margin:"2rem"}}onClick={handleDelete}>Delete</Button>
        <Link to="/add"><Button variant="success" onClick={()=>{getContacts();handleEdit()}}>Edit</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;

