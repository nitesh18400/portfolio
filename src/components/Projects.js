import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI Financial Advisor Chatbot',
      description: 'An AI-powered chatbot that provides portfolio analysis, tax harvesting, and rebalancing recommendations.',
      technologies: ['LangChain', 'Python', 'OpenAI API', 'Streamlit'],
      features: [
        'Intelligent query handling using LangChain',
        'Real-time financial insights using OpenAI\'s LLM',
        'Real-time data fetching for investment decision-making'
      ]
    },
    {
      title: 'ICU Admission Prediction',
      description: 'An AI model to predict ICU needs for COVID-19 patients based on clinical data.',
      technologies: ['Python', 'Sklearn', 'Pandas', 'NumPy'],
      features: [
        'High accuracy prediction model',
        'Clinical data analysis',
        'Data visualization and analysis'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-tertiary rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside space-y-2 text-textSecondary">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 