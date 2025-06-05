import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          <p>
            I am a solution-oriented developer with a strong foundation in web development,
            particularly focused on creating engaging frontend experiences. My expertise
            spans across modern web technologies, with a special emphasis on React.js
            development. I have a proven track record of effectively communicating with
            stakeholders and solving complex problems through innovative solutions.
          </p>
          <p className="mt-4">
            Beyond my technical skills, I am passionate about contributing to open-source
            projects and constantly expanding my knowledge of new frameworks and technologies.
            This drive for continuous learning helps me stay at the forefront of web
            development trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;