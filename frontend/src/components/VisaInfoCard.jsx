import React from 'react';

const VisaInfoCard = () => {
  const features = [
    { name: 'Real-time tracking of your visa', status: true },
    { name: 'Precise ETA, no guesswork', status: true },
    { name: 'Transparent pricing; no hidden fees', status: true },
    { name: '100% digital process', status: true },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Visa application made simple and reliable</h2>
      
      <div style={styles.table}>
        <div style={styles.headerRow}>
          <div style={styles.brandName}>Dhwanika Overseas</div>
          <div style={styles.others}>Dhwanika Overseas</div>
          <div style={styles.others}>Others</div>
        </div>
        
        {features.map((feature, index) => (
          <div key={index} style={styles.row}>
            <div style={styles.featureName}>{feature.name}</div>
            <div style={styles.cell}>
              <span style={{ ...styles.icon, color: '#22c55e' }}>✓</span>
            </div>
            <div style={styles.cell}>
              <span style={{ ...styles.icon, color: '#ef4444' }}>✕</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
  },
  headerRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 80px 80px',
    paddingBottom: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  brandName: { color: '#6366f1' },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 80px 80px',
    padding: '12px 0',
    borderTop: '1px solid #f3f4f6',
    alignItems: 'center',
  },
  cell: {
    textAlign: 'center',
  },
  icon: {
    fontSize: '20px',
    fontWeight: 'bold',
  }
};

export default VisaInfoCard;