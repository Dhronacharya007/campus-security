import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const dummyClips = [
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
  {
    filename: 'video1.mp4',
    classification: 'Abuse',
    timestamp: 1743104857, // 28 Mar 2025, 1:30 AM
  }
];

export default function SecurityVideosScreen() {
  const [selectedClipUri, setSelectedClipUri] = useState(null);

  if (selectedClipUri) {
    return <VideoPlayer clipUri={selectedClipUri} onBack={() => setSelectedClipUri(null)} />;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎥 Detected Clips</h2>
      {dummyClips.map((clip, idx) => (
        <div
          key={idx}
          style={styles.card}
          onClick={() => setSelectedClipUri(process.env.PUBLIC_URL + '/' + clip.filename)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && setSelectedClipUri(process.env.PUBLIC_URL + '/' + clip.filename)}
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
  container: {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    color: '#4CAF50',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    width: '100%',
    maxWidth: '600px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'translateY(-2px)',
    },
  },
  clipName: {
    margin: '0 0 0.5rem 0',
    fontWeight: '600',
  },
  classification: {
    margin: '0 0 0.5rem 0',
    color: '#4CAF50',
  },
  time: {
    margin: '0',
    color: '#888',
    fontSize: '0.9rem',
  },
};
