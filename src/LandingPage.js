import React from 'react';

const LandingPage = ({ username }) => {
  // Get the current time
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  

  // Determine the appropriate greeting based on the current time
  let greeting;
  if (currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  // Inline styles
  const containerStyle = {
    textAlign: 'center',
    marginTop: '100px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  const contentContainerStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#FF4500', // Orange color
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Text shadow
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#6495ED', // Cornflower blue color
  };

  const menuStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const menuItemStyle = {
    display: 'inline-block',
    marginRight: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#FF1493', // Deep pink color
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>{`${greeting} Rescuer!`}</h1>
        <p style={paragraphStyle}>{`How are you doing today, ${username}?`}</p>
        <nav>
          <ul style={menuStyle} className="menu">
            <li style={menuItemStyle}>
              <a style={linkStyle} href="/new-ticket">Create New Ticket</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LandingPage;
