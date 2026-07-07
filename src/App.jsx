import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Footer from "./component/footer";
import Header from "./component/header";
import NavBar from "./component/NavBar";

import Home from "./menubar/Home";
import Dashboard from "./menubar/Dashboard";
import AboutUs from "./menubar/About";
import Services from "./menubar/Services";
import Contact from "./menubar/Contact";
import Contactlist from "./menubar/ContactList";
import ContactDetails from "./menubar/ContactDetails";      
import UpdateContact from "./menubar/UpdateContact";        
import Login from "./component/login";
import Register from "./component/Register";

import "./App.css"; 

function App() {
  return (
    <div className="app-canvas-container">
      <Toaster position="top-right" />

      {/* Prominent Institutional Banner Component */}
      <header className="university-grand-banner shadow-lg">
        <div className="banner-overlay-grid"></div>
        <div className="container-fluid py-4 px-5 text-center position-relative z-1">
          
          {/* Subtle Institutional Tag */}
          <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
            <span className="banner-indicator-dot"></span>
            <span className="banner-top-tag">Official Academic Portal</span>
          </div>

          {/* Large Classic Title */}
          <h1 className="university-banner-title">
            GANDHI INSTITUTE OF ENGINEERING AND TECHNOLOGY UNIVERSITY
          </h1>
          
          {/* Location Badge */}
          <div className="mt-3">
            <span className="banner-location-badge">ODISHA, GUNUPUR</span>
          </div>

        </div>
      </header>

      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Contact-List" element={<Contactlist />} />
        <Route path="/contact-by-id/:id" element={<ContactDetails />} />
        <Route path="/update-contact/:id" element={<UpdateContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
