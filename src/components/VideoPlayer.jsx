import React from 'react';

export default function VideoPlayer({ clipUri, onBack }) {
  return (
    <div style={styles.container}>
      <button 
        onClick={onBack} 
        style={styles.backButton}
        aria-label="Back to video list"
      >
        ← Back to Videos
      </button>
      <div style={styles.videoWrapper}>
        <video
          controls
          style={styles.video}
          autoPlay
          muted // Needed for autoplay in most browsers
          playsInline // For iOS compatibility
        >
          <source src={clipUri} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
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
    position: 'relative',
  },
  videoWrapper: {
    width: '100%',
    maxWidth: '1200px',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  backButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '12px 24px',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    zIndex: 100,
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: 0.9,
    },
  },
};
