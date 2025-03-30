import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'INDMONEY',
      role: 'Software Development Engineer',
      period: 'Nov 2022 – Present',
      location: 'Gurugram, India',
      achievements: [
        'Successfully shipped a comprehensive Bill Payment Solution (credit card bill payment, fast tag, electricity bill, etc), incorporating UI widget support for Android and iOS, NPCI Bharat Bill Connect integration, card tokenization, secure token handling, payment processing, and refund management.',
        'Worked on Bank Addition Journey which includes verification of user while adding a bank.',
        'Built a payments dashboard from scratch for configuration management, compliance data monitoring, and reporting.',
        'Improved transaction flows by integrating new vendor APIs, reducing latency, downtimes, and improving error handling',
        'Enhanced test case coverage from 19% to 80%, increasing system reliability.',
        'Handled On-call responsibilities for payment-related issues, ensuring quick issue resolution and system stability.'
      ]
    },
    {
      company: 'STASHFIN',
      role: 'Software Development Engineer',
      period: 'May 2022 – Nov 2022',
      location: 'Delhi, India',
      achievements: [
        'Developed an AI-based audio filter to detect abusive language and sensitive content in calls.',
        'Created a bank statement parser to extract and analyze financial data from PDFs.',
        'Implemented multiple business-critical APIs for customer feedback, issue resolution, and operational processes.'
      ]
    },
    {
      company: 'IRD DEPARTMENT, IIITD',
      role: 'Software Development Intern',
      period: 'August 2021 – May 2022',
      location: 'Delhi, India',
      achievements: [
        'Worked on Automating the process Stipend Processing System',
        'Developed a module for a student hiring system which includes a Job Board, Offer letter Generation, Posting New Job Notifications, etc. (Still used by admins)'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-secondary"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full" />
              <div className="bg-tertiary p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-secondary">{exp.company}</h3>
                  <span className="text-textSecondary text-sm">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium mb-2">{exp.role}</h4>
                <p className="text-textSecondary text-sm mb-4">{exp.location}</p>
                <ul className="list-disc list-inside space-y-2 text-textSecondary">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
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

export default Experience; 