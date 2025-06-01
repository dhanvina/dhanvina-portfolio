import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface Vector3Array extends Array<number> {
  0: number;
  1: number;
  2: number;
}

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create nodes for a simple neural network visualization
  const createNodes = () => {
    const nodes: JSX.Element[] = [];
    const layers = [4, 6, 6, 4]; // Neural network architecture
    const spacing = 2;
    
    layers.forEach((nodeCount, layerIndex) => {
      const layerOffset = (layers.length - 1) / 2 * -spacing;
      for (let i = 0; i < nodeCount; i++) {
        const y = (i - (nodeCount - 1) / 2) * 1.5;
        nodes.push(
          <Sphere
            key={`node-${layerIndex}-${i}`}
            args={[0.12, 16, 16]}
            position={[layerOffset + layerIndex * spacing, y, 0] as Vector3Array}
          >
            <meshStandardMaterial
              color="#00ff9f"
              emissive="#00ff9f"
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </Sphere>
        );
      }
    });
    return nodes;
  };

  // Create connections between nodes
  const createConnections = () => {
    const connections: JSX.Element[] = [];
    const layers = [4, 6, 6, 4];
    const spacing = 2;

    for (let l = 0; l < layers.length - 1; l++) {
      const layerOffset = (layers.length - 1) / 2 * -spacing;
      for (let i = 0; i < layers[l]; i++) {
        for (let j = 0; j < layers[l + 1]; j++) {
          const startPos: Vector3Array = [
            layerOffset + l * spacing,
            (i - (layers[l] - 1) / 2) * 1.5,
            0
          ];
          const endPos: Vector3Array = [
            layerOffset + (l + 1) * spacing,
            (j - (layers[l + 1] - 1) / 2) * 1.5,
            0
          ];
          connections.push(
            <Line
              key={`connection-${l}-${i}-${j}`}
              points={[startPos, endPos]}
              color="#00ff9f"
              lineWidth={0.5}
              transparent
              opacity={0.2}
            />
          );
        }
      }
    }
    return connections;
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.z = Math.sin(Date.now() / 5000) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {createNodes()}
      {createConnections()}
    </group>
  );
};

const FloatingGeometry = () => {
  return <NeuralNetwork />;
};

export default FloatingGeometry;
