import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'IIIT Delhi',
    period: 'August 2018 - May 2022',
    cgpa: '7.54',
    coursework: [
      'Data Structures And Algorithms (Teaching Assistant)',
      'Operating Systems',
      'Database Management Systems',
      'Machine Learning',
      'Android Development'
    ],
    achievements: [
      '500+ DSA problems solved on LeetCode, Codeforces, and GFG',
      'Ranked 900 in CodeChef September Lunchtime 2020 (Div 2, out of 8790 participants)',
      'Ranked 13 in a Kaggle ML competition (Predicting RNA Interactions)'
    ]
  };

  return (
    <section id="education" className="py-20">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-tertiary rounded-lg p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-secondary mb-2">{education.school}</h3>
            <p className="text-textPrimary text-lg mb-1">{education.degree}</p>
            <p className="text-textSecondary">{education.period}</p>
            <p className="text-textSecondary">CGPA: {education.cgpa}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-secondary mb-4">Coursework</h4>
              <ul className="space-y-2">
                {education.coursework.map((course, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-textSecondary flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-secondary mb-4">Achievements</h4>
              <ul className="space-y-2">
                {education.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-textSecondary flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 