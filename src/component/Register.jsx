import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Register.css"; // Ensure you have your matching dark styles here

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Scroll viewport to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    // Client-side quick check
    if (!name || !email || !password) {
      setErrorMessage("All input registration fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("https://ebuhub-backend.onrender.com/api/auth/register", {
        name,
        email,
        password,
      });

      console.log("Registration API raw output:", res.data);

      // 🔐 EXTRACT TOKEN: Safe lookup for res.data.token or nested models
      const token = res.data.token || (res.data.user && res.data.user.token);

      if (token) {
        // Save token to localStorage so Dashboard can pick it up instantly
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        // Fallback if backend registers but doesn't auto-login with a token
        alert("Registration complete! Redirecting to login portal.");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration endpoint failure:", error);
      setErrorMessage(
        error.response?.data?.message || "An error occurred during account creation."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-card">
        <h2>Create an Account</h2>
        <p className="subtitle">Join EduHub and master global industry skills</p>

        {errorMessage && <div className="form-error-alert">{errorMessage}</div>}

        <form onSubmit={handleRegisterSubmit} className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-register-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Register Now"}
          </button>
        </form>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
