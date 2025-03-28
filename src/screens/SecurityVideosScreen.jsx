import React, { useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const dummyClips = [
  {
    filename: 'video1.mp4',
    classification: 'Abuse',
    timestamp: 1743104857, // 28 Mar 2025, 1:30 AM
  },
  {
    filename: 'video2.mp4',
    classification: 'Violence',
    timestamp: 1743107437, // 28 Mar 2025, 2:30 AM
  },
  {
    filename: 'video3.mp4',
    classification: 'Violence',
    timestamp: 1743112357, // 28 Mar 2025, 3:30 AM
  },
  {
    filename: 'video4.mp4',
    classification: 'Vandalism',
    timestamp: 1743112897, // 28 Mar 2025, 4:30 AM
  },
  {
    filename: 'video5.mp4',
    classification: 'Vandalism',
    timestamp: 1743116497, // 28 Mar 2025, 5:30 AM
  },
];

export default function SecurityVideosScreen() {
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
      <h2 style={styles.title}>🎥 Detected Clips</h2>
      {dummyClips.map((clip, idx) => (
        <div
          key={idx}
          style={styles.card}
          onClick={() => setSelectedClipUri(`/${clip.filename}`)} // video in public/
        >
          <p style={styles.clipName}>{clip.filename}</p>
          <p style={styles.classification}>Type: {clip.classification}</p>
          <p style={styles.time}>
            📅 {new Date(clip.timestamp * 1000).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

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
    height: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
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
    maxWidth: '500px',
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
