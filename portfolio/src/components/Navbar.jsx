import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold text-purple-500">Vairal Kushal</span>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub size={20} className="hover:text-purple-400 transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} className="hover:text-purple-400 transition-colors duration-300" />
          </a>
        </div>
        <ul className="flex gap-6 text-sm font-semibold tracking-wide">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
