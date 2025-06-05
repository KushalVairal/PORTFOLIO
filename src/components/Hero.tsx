import React from 'react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Vairal Kushal
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Frontend Developer | React Enthusiast
            </p>
            <a
              href="#projects"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/WhatsApp_Image_2025-06-05_at_17.05.41_748d986a-removebg-preview.png"
              alt="Vairal Kushal"
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;