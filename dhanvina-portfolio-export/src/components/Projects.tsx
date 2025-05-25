import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "FaceTrackEDU",
      period: "January 2018 – December 2018",
      technologies: ["Python", "Bootstrap", "Python-Flask", "Computer Vision", "Deep Learning", "MySQL"],
      description: [
        "Automated student attendance tracking, reducing manual effort and errors through advanced computer vision techniques",
        "Developed a voice command feature for enhanced accessibility, particularly for users with disabilities and professors",
        "The innovative solution empowers educators to effortlessly update attendance records by making them error-free"
      ]
    },
    {
      title: "SmartMark",
      period: "January 2017 – May 2017",
      technologies: ["Python", "Python-Flask", "Deep Learning", "Computer Vision"],
      description: [
        "Implemented Deep Learning models to automate the marks updating process, resulting 70% reduction in time spent",
        "Developed an interface for teachers to easily upload and process answer script images, improving the overall user experience",
        "Enhanced system accuracy and efficiency by utilizing computer vision techniques for information extraction from answer scripts"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Academic Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform-gpu"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="bg-blue-600 py-4 px-6"
                whileHover={{
                  backgroundColor: "#2563EB",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-blue-100 text-sm">{project.period}</p>
              </motion.div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies Used:</h4>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs"
                        variants={techBadgeVariants}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "#E5E7EB"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                    {project.description.map((desc, descIndex) => (
                      <motion.li 
                        key={descIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (descIndex * 0.1) }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
