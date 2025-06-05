import React from 'react';

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
      {name}
    </span>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      title: 'Programming',
      skills: ['Core Java', 'Python (Basics)'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQL'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Excel'],
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Teamwork', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;