import axios from "axios";

const API_POST_URL = "https://ebuhub-backend.onrender.com/create";
const API_GET_ALL_CONTACT_URL = "https://ebuhub-backend.onrender.com/contact-list";
const API_GET_BY_ID_URL = "https://ebuhub-backend.onrender.com/contact";

export const createContact = (contactData) =>
  axios.post(API_POST_URL, contactData);

export const getAllContacts = () =>
  axios.get(API_GET_ALL_CONTACT_URL);

export const getContactById = (id) =>
  axios.get(`${API_GET_BY_ID_URL}/${id}`);