import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContactById, updateContact } from "../api/api";
import "./ContactDetails.css"; // Added: Imports your centering CSS file layouts

const UpdateContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    city: "",
    address: "",
  });

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    try {
      const response = await getContactById(id);
      setContact(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to load contact");
    }
  };

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateContact(id, contact);
      alert("Contact Updated Successfully");
      navigate("/Contact-List");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    /* Changed: Swapped standard Bootstrap layout container for your centering flexbox class */
    <div className="contact-details-page">
      <div className="contact-card card shadow p-4">
        <h2 className="text-center mb-4">Update Contact</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Name"
            value={contact.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phoneno"
            className="form-control mb-3"
            placeholder="Phone"
            value={contact.phoneno}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Password"
            value={contact.password}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            className="form-control mb-3"
            placeholder="City"
            value={contact.city}
            onChange={handleChange}
          />

          <textarea
            name="address"
            className="form-control mb-3"
            placeholder="Address"
            value={contact.address}
            onChange={handleChange}
          />

          {/* Changed: Added the text alignment element wrapper and back-btn helper hooks */}
          <div className="text-center">
            <button className="btn btn-warning back-btn fw-bold">
              Update Contact
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
