import axios from "axios";

// Backend Base URL
const BASE_URL = "https://ebuhub-backend.onrender.com/api/auth";

// ==============================
// CREATE CONTACT
// ==============================
export const createContact = async (contactData) => {
  return await axios.post(`${BASE_URL}/create`, contactData);
};

// ==============================
// GET ALL CONTACTS
// ==============================
export const getAllContacts = async () => {
  return await axios.get(`${BASE_URL}/contact-list`);
};

// ==============================
// GET CONTACT BY ID
// ==============================
export const getContactById = async (id) => {
  return await axios.get(`${BASE_URL}/find-by/${id}`);
};

// ==============================
// UPDATE CONTACT
// ==============================
export const updateContact = async (id, updatedData) => {
  return await axios.put(
    `${BASE_URL}/update-contact-by-id/${id}`,
    updatedData
  );
};

// ==============================
// DELETE CONTACT
// ==============================
export const deleteContact = async (id) => {
  return await axios.delete(`${BASE_URL}/delete-contact-by-id/${id}`);
};