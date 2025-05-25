import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Geekonomy",
      position: "Application Developer",
      location: "Bangalore",
      period: "April 2024 – June 2024",
      achievements: [
        "Developed criminal monitoring application for use by police, lawyers, and other civil servants to track criminal activities and cases",
        "Integrated 20+ APIs to gather detailed historical and current crime data, optimizing search functionality and user interface design",
        "Reduced manual work by 80% through efficient data management and user-friendly application design"
      ]
    },
    {
      company: "GAT, Incubation Center",
      position: "Team Lead and Backend Developer",
      location: "Bangalore",
      period: "June 2023 – November 2023",
      achievements: [
        "Spearheaded development of AI-powered Asset Management System using Django and React, boosting asset utilization by 70%",
        "Implemented role-based access control, enhancing security by ensuring only authorized users could access sensitive data",
        "Streamlined integration processes, leading to a 30% increase in project delivery speed"
      ]
    },
    {
      company: "DezyNation",
      position: "Flutter App Developer",
      location: "Bangalore",
      period: "March 2023 – April 2023",
      achievements: [
        "Engineered money transfer platform with 25+ APIs, ensuring seamless functionality and security with OTP and MPIN methods",
        "Directed comprehensive testing and validation, achieving a highly responsive and efficient user experience performance",
        "Developed intuitive Flutter UI screens, significantly improving user navigation and satisfaction"
      ]
    },
    {
      company: "Varuth",
      position: "Web Developer",
      location: "Bangalore",
      period: "October 2022 – November 2022",
      achievements: [
        "Implemented Figma to optimize the website design workflow, increasing 50% productivity and a streamlined design process",
        "Conducted user research and design improvements by attracting over 500+ visitors from Germany and Australia",
        "Collaborated with cross-functional teams to implement design changes that improved the website's overall performance"
      ]
    },
    {
      company: "Amazon ML Summer School 22'",
      position: "Machine Learning – Apprenticeship",
      location: "Remote",
      period: "July 2022 – September 2022",
      achievements: [
        "Selected among top candidates for intensive machine learning training program by Amazon",
        "Mastered advanced ML concepts including deep learning, NLP, and computer vision",
        "Completed practical projects implementing real-world ML solutions"
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"/>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-8"
              variants={itemVariants}
            >
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                />
                
                {/* Content */}
                <motion.div 
                  className={`ml-6 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <motion.h4 
                      className="text-lg font-semibold text-blue-600 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {exp.position}
                    </motion.h4>
                    <motion.div 
                      className="text-sm text-gray-600 mb-3 flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </motion.div>
                    <motion.ul 
                      className="list-disc list-inside text-gray-600 space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li 
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + (achievementIndex * 0.1) }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
