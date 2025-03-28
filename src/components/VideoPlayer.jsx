import React, { useRef } from 'react';

// VideoPlayer Component
export default function VideoPlayer({ clipUri, onBack }) {
  const videoRef = useRef(null);

  // Function to toggle fullscreen mode
  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Video Element */}
      <video ref={videoRef} controls style={styles.video}>
        <source src={clipUri} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Controls */}
      <div style={styles.controls}>
        <button onClick={onBack} style={styles.button}>Back</button>
        <button onClick={toggleFullScreen} style={styles.button}>Fullscreen</button>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    position: 'relative',
  },
  video: {
    width: '100%',
    maxHeight: '90vh',
    borderRadius: '8px',
  },
  controls: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};
