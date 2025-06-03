const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/60 to-black/90 -z-10"></div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Hi, I'm Vairal Kushal</h1>
      <p className="text-xl md:text-2xl font-mono text-purple-400">Full Stack Developer</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow hover:shadow-xl hover:bg-purple-700 transition duration-300"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
