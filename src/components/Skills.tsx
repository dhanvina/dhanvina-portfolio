import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C", "Dart"],
      color: "bg-blue-500"
    },
    {
      category: "Frameworks",
      skills: ["Flutter", "Django", "Flask", "React.js"],
      color: "bg-purple-500"
    },
    {
      category: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript"],
      color: "bg-green-500"
    },
    {
      category: "Database Technologies",
      skills: ["MySQL", "MongoDB"],
      color: "bg-yellow-500"
    },
    {
      category: "Version Control",
      skills: ["GitHub"],
      color: "bg-red-500"
    },
    {
      category: "Others",
      skills: ["Postman", "Android Studio", "FlutterFlow", "Figma", "Wix", "REST API"],
      color: "bg-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform-gpu"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`${category.color} py-3 px-4`}>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillVariants}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-default"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
