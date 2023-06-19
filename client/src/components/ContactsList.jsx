import React, {useEffect}from 'react'
import{useSelector, useDispatch} from 'react-redux';
import { getContacts } from '../JS/actions/contactActions';
import ContactCard from './ContactCard';

const ContactsList = () => {
    const contacts = useSelector(state => state.contactReducer.contacts);
    const loadContacts = useSelector(state => state.contactReducer.loadContacts);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getContacts());
    }, []);
  return (
    <div style={{display:"flex", flexwrap:"wrap", justifycontent:"center", alignItems:"center", padding:"10%"}}>
      {loadContacts ? (
  <h1>Loading...</h1>
) : (
  contacts.length === 0 ? (
    <h2>There is no data!</h2>
  ) : (
    contacts.map((el) => <ContactCard key={el._id} contact={el} />)
  )
)}

    </div>
  )
}

export default ContactsList
