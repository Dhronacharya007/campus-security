import React from 'react';

export default function VideoPlayer({ clipUri, onBack }) {
  return (
    <div style={styles.container}>
      <video
        controls
        style={styles.video}
        autoPlay
      >
        <source src={clipUri} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={onBack} style={styles.button}>🔙 Back to Videos</button>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  video: {
    width: '90vw',
    height: 'auto',
    maxHeight: '80vh',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
