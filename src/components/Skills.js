import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    programming: [
      { name: 'Python', years: '3+ years' },
      { name: 'Golang', years: '1.5+ years' },
      { name: 'Java', years: '1.5+ years' },
      { name: 'HTML', years: '1 year' },
      { name: 'CSS', years: '1 year' },
      { name: 'JavaScript', years: '1 year' }
    ],
    technology: [
      'Django Framework',
      'Gin Web Framework',
      'SpringBoot',
      'AWS Lambda',
      'Redis',
      'AWS SNS',
      'AWS SQS',
      'Elastic Search',
      'MySQL',
      'PostgreSQL',
      'Cloudwatch',
      'Docker',
      'New Relic',
      'Grafana'
    ]
  };

  return (
    <section id="skills" className="py-20">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">Programming</h3>
            <div className="space-y-4">
              {skills.programming.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-textPrimary">{skill.name}</span>
                    <span className="text-textSecondary text-sm">{skill.years}</span>
                  </div>
                  <div className="h-2 bg-tertiary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">Technology Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.technology.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-tertiary p-3 rounded-lg"
                >
                  <span className="text-textSecondary">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 