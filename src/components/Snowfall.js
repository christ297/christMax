import React from 'react';
import Snowfall from 'react-snowfall';

const SnowfallEffect = () => (
  <div className="snowfall-container">
    <Snowfall
      color="white"
      snowflakeCount={200}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    />
  </div>
);

export default SnowfallEffect;
