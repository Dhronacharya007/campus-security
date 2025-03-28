import React, { useRef } from 'react';

export default function VideoPlayer({ clipUri, onBack }) {
  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div style={styles.container}>
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        style={styles.video}
      >
        <source src={clipUri} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={onBack}>Back to Videos</button>
        <button style={styles.button} onClick={toggleFullScreen}>Fullscreen</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#000',
    color: '#fff',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  video: {
    width: '90%',
    height: '80vh',
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    backgroundColor: '#000',
  },
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
