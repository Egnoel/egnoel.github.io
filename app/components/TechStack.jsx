import React from 'react';

const TechStack = ({ id }) => {
  const techs = [
    { name: 'React', icon: '/react.png' },
    { name: 'Next.js', icon: '/nextjs.png' },
    { name: 'Tailwind CSS', icon: '/tailwindcss.png' },
    {
      name: 'JavaScript',
      icon: '/JavaScript.png',
    },
    { name: 'Solidity', icon: '/solidity.svg' },
    { name: 'Foundry', icon: '/foundry.png' },
    { name: 'Node.js', icon: 'nodejs.png' },
  ];
  return (
    <div className="flex flex-col gap-5" id={id}>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-5xl">My Tech Stack</h2>
        <p className="text-current/55 text-2xl">
          Technologies that I've been working with
        </p>
      </div>
      <div className="flex flex-row gap-7 flex-wrap items-center justify-center mt-3">
        {techs.map((tech) => (
          <div key={tech.name} className="card  shadow-sm">
            <figure>
              <img
                src={tech.icon}
                alt={tech.name}
                className="object-cover size-11"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{tech.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
