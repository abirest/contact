import { GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL,GET_ONE_CONTACT } from "../constant/actionsTypes";

const initialState = {
    loadContacts: false,
    contacts: [],
    user: {},
    errors:null
}

export const contactReducer = (state=initialState, {type, payload})=>{
switch (type) {
    case GET_CONTACTS_LOAD:
        return {...state, loadContacts : true}
    case GET_CONTACTS_SUCCESS:
        return{...state , loadContacts: false , contacts:payload}
    case GET_CONTACTS_FAIL:
        return {...state, loadContacts: false, errors:payload}
    case GET_ONE_CONTACT:
        return {...state,user:payload}
    default:
        return state;
}
}