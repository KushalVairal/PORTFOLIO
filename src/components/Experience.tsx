import React from 'react';

interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string;
}

function Experience() {
  const internships: Internship[] = [
    {
      company: 'The Sparks Foundation',
      role: 'Web Developer Intern',
      duration: '3 months',
      description: 'Developed responsive web applications and contributed to various projects focusing on frontend development.',
    },
    {
      company: 'Slash Mark IT Solutions',
      role: 'Web Development Intern',
      duration: '2 months',
      description: 'Worked on creating modern user interfaces and implementing responsive designs for client projects.',
    },
    {
      company: 'Oasis Infobyte',
      role: 'Web Development Intern',
      duration: '1 month',
      description: 'Gained hands-on experience in web development and collaborated with team members on various projects.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {internships.map((internship) => (
            <div
              key={internship.company}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {internship.role} at {internship.company}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 mt-1">
                Duration: {internship.duration}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {internship.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;