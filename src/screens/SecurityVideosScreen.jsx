import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const dummyClips = [
  {
    filename: 'video1.mp4',
    classification: 'abuse',
    timestamp: 1743120000, // Mar 28, 2025 1:00 AM
  },
  {
    filename: 'video2.mp4',
    classification: 'violence',
    timestamp: 1743130800, // Mar 28, 2025 4:00 AM
  },
  {
    filename: 'video3.mp4',
    classification: 'violence',
    timestamp: 1743134400, // Mar 28, 2025 5:00 AM
  },
  {
    filename: 'video4.mp4',
    classification: 'vandalism',
    timestamp: 1743127200, // Mar 28, 2025 3:00 AM
  },
  {
    filename: 'video5.mp4',
    classification: 'vandalism',
    timestamp: 1743138000, // Mar 28, 2025 6:00 AM
  },
];

const SecurityVideosScreen = () => {
  const [selectedClipUri, setSelectedClipUri] = useState(null);

  if (selectedClipUri) {
    return (
      <div style={styles.videoContainer}>
        <VideoPlayer clipUri={selectedClipUri} onBack={() => setSelectedClipUri(null)} />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎥 Detected Clips (Dummy)</h2>
      {dummyClips.map((item, idx) => (
        <div
          key={idx}
          style={styles.card}
          onClick={() => setSelectedClipUri(`/clips/${item.filename}`)}
        >
          <p style={styles.clipName}>{item.filename}</p>
          <p style={styles.classification}>Type: {item.classification}</p>
          <p style={styles.time}>📅 {new Date(item.timestamp * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

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
    maxWidth: '600px',
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
};

export default SecurityVideosScreen;
