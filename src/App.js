import React from 'react';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div>
      <div className="container">
        <div className="doer-text">
          <p>Doer</p>
        </div>
        <div className="profile-button">
          <button>Your Profile</button>
        </div>
        <div className="dashboard-button">
          <button>Dashboard</button>
        </div>
        <div className="calendar-button">
          <button>Calendar</button>
        </div>
        <div className="settings-button">
          <button>Settings</button>
        </div>
        <div className="logout-button">
          <button>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default App;
