// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.description}>
        If you have any questions, feel free to reach out through the form below!
      </p>
      <div style={styles.iframeContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfLe9POQUCXUUtcBSm62F0_gu_rB0w1ctBSaKW7bgT_EVdIxQ/viewform?embedded=true"
          width="640"
          height="800"
          style={styles.iframe}
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

const styles: React.CSSProperties = {
  container: {
    padding: '40px',
    margin: '0 auto',
    maxWidth: '800px',
    textAlign: 'center',
    marginTop: '50px',
    backgroundImage: "url('../assets/Backgrounds/ContactBackground.jpg')", // Add background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
    color: 'white', // Text color for contrast
    borderRadius: '8px', // Optional: rounded corners
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  description: {
    marginBottom: '40px',
  },
  iframeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
  iframe: {
    border: 'none',
    width: '100%',
    maxWidth: '640px',
    height: '800px',
  },
};

export default Contact;
