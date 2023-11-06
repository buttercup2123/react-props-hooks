import React from "react";
import "./HomePage.css"; // Create a separate CSS file for the home page

function HomePage() {
  return (
    <div className="home-page">
      {/* Background image */}
      <div className="background-image"></div>
      
      {/* Content overlay */}
      <div className="content">
        <h1>Get Your Team Working In Sync</h1>
        <p>Build powerful low-code business solutions to customize work and communication.</p>
      </div>
    </div>
  );
}

export default HomePage;
