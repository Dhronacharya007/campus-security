import React, { useState } from 'react';

const SERVER_URL = 'http://localhost:3000'; // Adjust to your backend's URL

const SecurityVideosScreen = () => {
  const [selectedClipUri, setSelectedClipUri] = useState(null);

  // Dummy video data
  const clips = [
    {
      filename: 'video1.mp4',
      classification: 'Abuse',
      timestamp: 1743119426, // Example timestamp
    },
    {
      filename: 'video2.mp4',
      classification: 'Violence',
      timestamp: 1743123397,
    },
    {
      filename: 'video3.avi',
      classification: 'Vandalism',
      timestamp: 1743123456,
    },
    {
      filename: 'video1.mp4',
      classification: 'Type D',
      timestamp: 1743119415,
    },
    {
      filename: 'video1.mp4',
      classification: 'Type E',
      timestamp: 1743119529,
    },
  ];

  const styles = {
    videoContainer: {
      backgroundColor: '#000',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: '#000',
      color: '#fff',
      width: '100vw',
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: '24px',
      color: '#4CAF50',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#1F1F1F',
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '10px',
      cursor: 'pointer',
      width: '80%',
    },
    clipName: {
      fontWeight: 'bold',
    },
    classification: {
      color: '#4CAF50',
    },
    time: {
      color: '#999',
      marginTop: '4px',
    },
    empty: {
      color: '#888',
      marginTop: '20px',
      textAlign: 'center',
    },
    video: {
      width: '100%',
      maxHeight: '500px',
      borderRadius: '10px',
    },
    backButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  if (selectedClipUri) {
    return (
      <div style={styles.videoContainer}>
        <video controls style={styles.video}>
          <source src={selectedClipUri} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={() => setSelectedClipUri(null)} style={styles.backButton}>
          Back to Videos
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎥 Detected Clips</h2>
      {clips.length === 0 ? (
        <p style={styles.empty}>No clips found.</p>
      ) : (
        clips.map((item, idx) => (
          <div
            key={idx}
            style={styles.card}
            onClick={() => setSelectedClipUri(`${SERVER_URL}/clips/${item.filename}`)}
          >
            <p style={styles.clipName}>{item.filename}</p>
            <p style={styles.classification}>Type: {item.classification}</p>
            <p style={styles.time}>
              📅 {new Date(item.timestamp * 1000).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default SecurityVideosScreen;
