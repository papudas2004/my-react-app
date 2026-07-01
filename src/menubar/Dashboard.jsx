import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const syncDashboardProfile = () => {
      try {
        const token = localStorage.getItem("token");
        const storedUserProfileString = localStorage.getItem("saved_user_profile");

        // Safety gate if user completely bypasses login screen
        if (!token) {
          console.warn("No authentication tokens stashed in browser. Re-routing...");
          navigate("/login");
          return;
        }

        // ✅ RECOVERY ENGINE: Decode the user data stashed inside memory by Login page
        if (storedUserProfileString) {
          setUser(JSON.parse(storedUserProfileString));
        } else {
          // Backup fallback profile if string is entirely empty
          setUser({
            name: "EduHub Academic Student",
            email: "student@eduhub.com",
            _id: "EDU-ALUMNI-9421"
          });
        }
      } catch (error) {
        console.error("Dashboard memory breakdown error:", error);
      } finally {
        setLoading(false);
      }
    };

    syncDashboardProfile();
  }, [navigate]);

  return (
    <div className="dashboard-wrapper">
      <aside className="db-sidebar">
        <h2 className="db-logo"><span className="logo-accent">Edu</span>Hub</h2>
        <nav className="db-sidebar-links">
          <Link className="db-link" to="/">🏠 Home</Link>
          <Link className="db-link active" to="/dashboard">📊 Dashboard</Link>
          <Link className="db-link" to="/bookticket">🎫 Book Ticket</Link>
          <Link className="db-link" to="/contact">📞 Contact</Link>
          <Link className="db-link" to="/Contact-List">📁 Contact List</Link>
        </nav>
      </aside>

      <main className="db-main-content">
        <header className="db-topbar">
          <h2>Overview Console</h2>
          {user && (
            <div className="db-profile-pill">
              <div className="db-avatar">{user.name ? user.name.charAt(0).toUpperCase() : "U"}</div>
              <div className="db-profile-meta">
                <p>{user.name || "Academic Member"}</p>
                <small>{user.email || "No email assigned"}</small>
              </div>
            </div>
          )}
        </header>

        {loading ? (
          <div className="db-loading-state">
            <p>Syncing secure system profiles...</p>
          </div>
        ) : (
          <>
            <section className="db-profile-card">
              <div className="card-badge">Verified Member</div>
              <h3>👤 Institutional Student Profile</h3>
              <div className="profile-fields-grid">
                <div className="field-row">
                  <span className="field-label">Full Name</span>
                  <span className="field-value">{user?.name || "Not Available"}</span>
                </div>
                <div className="field-row">
                  <span className="field-label">Email Address</span>
                  <span className="field-value">{user?.email || "Not Available"}</span>
                </div>
                <div className="field-row">
                  <span className="field-label">System Account ID</span>
                  <span className="field-value text-mono">{user?._id || user?.id || "Not Available"}</span>
                </div>
              </div>
            </section>

            <section className="db-stats-grid">
              <div className="stat-card">
                <span className="stat-icon">🎟️</span>
                <h3>Booked Tickets</h3>
                <p className="stat-number">120</p>
              </div>
              <div className="stat-card">
                <span className="stat-icon">✉️</span>
                <h3>Support Messages</h3>
                <p className="stat-number">35</p>
              </div>
              <div className="stat-card">
                <span className="stat-icon">💰</span>
                <h3>Tuition Ledger</h3>
                <p className="stat-number text-emerald">₹12,500</p>
              </div>
              <div className="stat-card">
                <span className="stat-icon">⚡</span>
                <h3>Placement Track</h3>
                <p className="stat-number text-blue">Active</p>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
