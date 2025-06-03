const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React & Tailwind CSS.",
      link: "#",
    },
    {
      title: "Weather App",
      description: "Check weather in any city using OpenWeather API.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black text-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-purple-400 text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-purple-500 rounded-lg shadow hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 underline mt-2 inline-block hover:text-purple-300"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
