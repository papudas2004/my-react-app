import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllContacts, deleteContact } from "../api/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactList.css"; 

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const response = await getAllContacts();
      setContacts(response.data);
    } catch (error) {
      console.log(error);
      alert("Unable to load contacts");
    }
  };

  const addContact = () => {
    navigate("/contact");
  };

  const viewContact = (id) => {
    navigate(`/contact-by-id/${id}`);
  };

  const updateContact = (id) => {
    navigate(`/update-contact/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await deleteContact(id);
      loadContacts();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div className="classic-dark-wrapper min-vh-100 w-100 p-4">
      <div className="container-fluid max-layout-container">
        
        {/* Top Header Management Control Area */}
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          <div>
            <h1 className="console-main-title text-white m-0">Overview Console</h1>
            <p className="console-subtitle text-muted m-0 mt-1">Manage and organize your institutional employees</p>
          </div>
          <button
            className="btn btn-emerald-add px-4 py-2 shadow-sm"
            onClick={addContact}
          >
            + Add Contact
          </button>
        </div>

        {/* Deep Slate Panel Block Content Box wrapper */}
        <div className="classic-console-card shadow-lg p-4">
          <div className="d-flex align-items-center mb-4">
            <span className="status-indicator-dot me-2"></span>
            <h3 className="section-panel-title text-white m-0">List Of Employees</h3>
          </div>
          
          {/* Custom Styled Responsive Dark Console Layout Grid */}
          <div className="table-responsive">
            <table className="table table-dark-classic align-middle mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th className="text-end" style={{ paddingRight: '24px' }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {contacts.length > 0 ? (
                  contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td className="text-white-emphasis">{contact.name}</td>
                      <td className="text-muted-cyan">{contact.email}</td>
                      <td>{contact.city || "—"}</td>
                      <td>{contact.phoneno || "—"}</td>
                      <td>{contact.address || "—"}</td>

                      <td className="text-end">
                        <div className="actions-cell-wrapper">
                          <button
                            className="btn btn-action-view"
                            onClick={() => viewContact(contact._id)}
                          >
                            View
                          </button>

                          <button
                            className="btn btn-action-update"
                            onClick={() => updateContact(contact._id)}
                          >
                            Update
                          </button>

                          <button
                            className="btn btn-action-delete"
                            onClick={() => handleDelete(contact._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                      No Records Available in Employee Directory
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactList;
