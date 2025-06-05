import React from 'react';
import { GraduationCap } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  duration: string;
  score?: string;
}

function Education() {
  const education: Education[] = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Mahaveer Institute of Science and Technology',
      duration: '2020 - 2024',
    },
    {
      degree: 'Intermediate',
      institution: 'Sri Chaitanya Junior Kalasala',
      duration: 'Completed',
      score: 'CGPA 8.4',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <GraduationCap className="flex-shrink-0 w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {edu.institution}
                </p>
                <p className="text-blue-600 dark:text-blue-400 mt-1">
                  {edu.duration}
                </p>
                {edu.score && (
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Score: {edu.score}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;