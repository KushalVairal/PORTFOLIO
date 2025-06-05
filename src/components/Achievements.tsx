import React from 'react';
import { Award } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
}

function Achievements() {
  const achievements: Achievement[] = [
    {
      title: 'NASA Ames Space Settlement Contest 2017',
      description: 'Secured 2nd Prize for innovative space settlement design',
    },
    {
      title: 'TCS iON Certification',
      description: 'Completed advanced certification in software development',
    },
    {
      title: 'Oracle Dev Gym',
      description: 'Achieved multiple certifications in database management',
    },
    {
      title: 'Debate Competition',
      description: 'Won multiple awards in technical debate events',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="flex items-start space-x-4 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <Award className="flex-shrink-0 w-8 h-8 text-blue-600 dark:text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;