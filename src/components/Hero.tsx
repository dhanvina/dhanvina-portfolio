import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import FloatingGeometry from './3d/FloatingGeometry';
import profileImage from '../assets/profile.jpg';

const Scene = () => (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <FloatingGeometry />
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
      minPolarAngle={Math.PI / 2.5}
      maxPolarAngle={Math.PI / 1.5}
    />
  </>
);

const Hero = () => (
  <section className="relative w-full h-screen overflow-hidden bg-[#0a0f18]">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-[#0f172a] to-[#0a0f18] opacity-80" />
    
    {/* 3D Neural Network Visualization */}
    <div className="absolute inset-0">
      <Canvas
        className="canvas-container"
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
      {/* Text Content */}
      <div className="max-w-2xl">
        {/* Main heading with gradient */}
        <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9f] to-[#00f0ff]">
          Hi, I'm Dhanvina
        </h1>
        
        {/* Role */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-100">
          AI Engineer
        </h2>
        
        {/* Description with custom styling */}
        <p className="text-xl leading-relaxed mb-8 text-gray-300">
          Specializing in machine learning, deep learning, and building intelligent systems 
          that transform complex data into actionable insights.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-[#00ff9f] to-[#00f0ff] rounded-lg text-black font-semibold hover:opacity-90 transition-opacity">
            View Projects
          </button>
          <button className="px-8 py-3 border-2 border-[#00ff9f] text-[#00ff9f] rounded-lg font-semibold hover:bg-[#00ff9f] hover:text-black transition-all">
            Contact Me
          </button>
        </div>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3 mt-12">
          {['Python', 'TensorFlow', 'PyTorch', 'React', 'Azure', 'AWS', 'MLOps'].map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-full bg-[#1a2333] text-gray-300 text-sm border border-[#2a3343]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Profile Image */}
      <div className="hidden lg:block relative">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#00ff9f]/30 shadow-lg shadow-[#00ff9f]/20">
          <img 
            src={profileImage} 
            alt="Dhanvina" 
            className="w-full h-full object-cover object-center"
            draggable="false"
          />
        </div>
        {/* Decorative circle */}
        <div className="absolute -inset-4 border-2 border-[#00ff9f]/20 rounded-full animate-spin-slow" />
      </div>
    </div>
  </section>
);

export default Hero;
