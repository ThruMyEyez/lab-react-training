import { useState, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import './ThreeComponent.scss';
import { TextureLoader } from '../../node_modules/three/src/loaders/TextureLoader';

const Box = (props) => {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={(1, 1, 1)}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshNormalMaterial attach="material" />
      {/* <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.3}
        speed={1}
      /> */}
      {/* <meshStandardMaterial color={hover ? 'deeppink' : 'cadetblue'} /> */}
    </mesh>
  );
};

const ThreeComponent = () => {
  return (
    <Canvas className="three box" style={{ height: '12rem' }}>
      <OrbitControls />
      <Box />
      <ambientLight intensity={0.5} />
      <pointLight intensity={1} position={[3, 3, 5]} />
    </Canvas>
  );
};

export default ThreeComponent;
