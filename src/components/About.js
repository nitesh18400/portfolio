import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-textSecondary text-lg leading-relaxed">
              I am a passionate Software Development Engineer with expertise in building scalable solutions and creating impactful software experiences. With a strong foundation in computer science and hands-on experience in various technologies, I strive to develop innovative solutions that solve real-world problems.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              My journey in software development has been marked by continuous learning and growth. I have worked on diverse projects ranging from payment solutions to AI-powered applications, always focusing on writing clean, maintainable code and following best practices.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              When I'm not coding, I enjoy solving DSA problems and participating in competitive programming contests. I believe in the power of technology to transform lives and am committed to making a positive impact through my work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-tertiary rounded-lg p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-textSecondary">3+ years of professional experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-textSecondary">Expert in Python, Golang, and Java</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-textSecondary">Strong problem-solving skills</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-textSecondary">Experience with cloud technologies</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['Machine Learning', 'Cloud Computing', 'System Design', 'Competitive Programming'].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 