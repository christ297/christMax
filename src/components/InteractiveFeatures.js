import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const RotatingBall = () => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={[0, 1, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshWobbleMaterial color="#ffcc00" factor={1} speed={2} />
    </mesh>
  );
};

const InteractiveFeatures = () => {
  return (
    <section id="features" style={{ height: '400px' }}>
      <h2>Explorez les fonctionnalités interactives !</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingBall />
      </Canvas>
    </section>
  );
};

export default InteractiveFeatures;
