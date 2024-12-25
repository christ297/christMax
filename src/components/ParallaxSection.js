import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxSection = ({ children }) => {
  return (
    <div className="parallax-container">
      <Parallax translateY={['-50px', '50px']}>
        <div className="parallax-content">{children}</div>
      </Parallax>
    </div>
  );
};

export default ParallaxSection;
