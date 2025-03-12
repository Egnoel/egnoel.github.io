import React from 'react';

const Hero = ({ id }) => {
  return (
    <div className="hero" id={id}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/profile.jpeg" className="max-w-sm rounded-full shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Software developer</h1>
          <div className="py-6 text-xl">
            <p>
              Hi, my name is <span className="text-blue-400">Egnoel</span> and I
              love to build things.
            </p>
            <p className=""> I'll help you bring your ideas to life</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
