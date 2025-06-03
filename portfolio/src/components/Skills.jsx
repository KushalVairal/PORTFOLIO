import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";

const skills = [
  { icon: <FaReact size={30} />, name: "React" },
  { icon: <FaNodeJs size={30} />, name: "Node.js" },
  { icon: <FaHtml5 size={30} />, name: "HTML5" },
  { icon: <FaCss3Alt size={30} />, name: "CSS3" },
  { icon: <FaJsSquare size={30} />, name: "JavaScript" },
  { icon: <FaGitAlt size={30} />, name: "Git" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-purple-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow hover:scale-105 transition transform"
          >
            {skill.icon}
            <span className="mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
