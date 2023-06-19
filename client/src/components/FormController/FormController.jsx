import React, { useEffect, useState } from 'react';
import{Form,Button} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import { postContact, editContact } from '../../JS/actions/contactActions';
import "./FormController.css"

const FormController = () => {
const dispatch = useDispatch();
const edit = useSelector((state)=>state.editReducer.edit)

const userReducer = useSelector((state)=>state.contactReducer.user)

  const [user,setUser]=useState({name:"",email:"",phone:""});
console.log(user)

useEffect(()=>{
edit ? setUser(userReducer):setUser({name:"",email:"",phone:""})
},[userReducer,edit])

  const handleContact = ()=>{
    if (edit){
  dispatch(editContact(userReducer._id,user))
    }else{
      dispatch(postContact(user));}
  setUser({name:"",email:"",phone:""})
    }
  
  

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  return (
    <Form className='addForm'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone Number" name="phone" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button variant="success" onClick={handleContact} type="submit">
        {edit ? "Edit": "Add"}
      </Button>
    </Form>
  )
}

export default FormController
