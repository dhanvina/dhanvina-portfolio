import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h4 className="text-xl font-medium text-gray-800">Global Academy of Technology, Bangalore</h4>
                  <span className="text-gray-600">2020 - 2024</span>
                </div>
                <p className="text-gray-700 mt-1">Bachelor of Engineering (BE) in Computer Science</p>
                <p className="text-gray-700 mt-1">CGPA: 9.04</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h4 className="text-xl font-medium text-gray-800">Sri Chaitanya PU College, Bangalore</h4>
                  <span className="text-gray-600">2018 - 2020</span>
                </div>
                <p className="text-gray-700 mt-1">Class XII (CBSE) PCMC</p>
                <p className="text-gray-700 mt-1">CGPA: 7.8</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a Computer Science graduate with a strong foundation in AI, machine learning, and application development. 
              My experience spans across various domains including criminal monitoring systems, asset management, and financial technology.
              I am passionate about leveraging technology to solve real-world problems and create impactful solutions.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Throughout my academic and professional journey, I have developed expertise in Python, Java, Flutter, Django, and React.js,
              allowing me to build comprehensive full-stack applications. I am constantly learning and adapting to new technologies
              to stay at the forefront of the rapidly evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
