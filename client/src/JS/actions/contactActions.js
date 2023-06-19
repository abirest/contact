import {GET_CONTACTS_LOAD,GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL, GET_ONE_CONTACT } from "../constant/actionsTypes";
import axios from "axios";

export const getContacts = () => async(dispatch) =>{
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result = await axios.get("/api/user");
        console.log(result.data.response)
        dispatch({type:GET_CONTACTS_SUCCESS, payload:result.data.response});
    } catch (error) {
        console.log(error)
        dispatch({type:GET_CONTACTS_FAIL, payload:error})
    }
}

//Get one contact
export const getoneContact = (id)=>async(dispatch)=>{
    try {
        let result = await axios.get(`/api/user/${id}`)
        console.log(result)
        dispatch({type:GET_ONE_CONTACT, payload:result.data.response})
    } catch (error) {
        console.log(error)
    }
}


export const deleteContact =(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/user/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const postContact = (formData)=>async(dispatch)=>{
    try {
        await axios.post("/api/user/newuser", formData)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (id,formData)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/${id}`, formData)
        dispatch(getContacts)
    } catch (error) {
        console.log(error)
    }
}