import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { TbWorldCode } from 'react-icons/tb';
const Projects = ({ id }) => {
  const projects = [
    {
      id: 1,
      name: 'Real time chat app',
      description:
        'A real time chat application built with React, Node.js, and Socket.io',
      image: 'https://github.com/Egnoel/realtime_chat_app/raw/main/image.png',
      url: 'https://realtime-chat-app-35al.onrender.com/',
      github: 'https://github.com/Egnoel/realtime_chat_app',
    },
    {
      id: 2,
      name: 'Ecommerce_filtering',
      description: 'Filtering functionality for an e-commerce website',
      image: '/ecommerce.png',
      url: 'https://react-ecommerce-filtering-egnoels-projects.vercel.app/',
      github: 'https://github.com/Egnoel/react_Ecommerce_filtering',
    },
    {
      id: 3,
      name: 'ENS Dapp',
      description:
        'Project to display and interact with ENS names associated with wallet addresses',
      image: '/ENS.png',
      url: 'https://ens-dapp-tau.vercel.app/',
      github: 'https://github.com/Egnoel/ens_dapp',
    },
    {
      id: 4,
      name: 'FundMe Smart Contract',
      description: 'A smart contract for a crowdfunding platform',
      image: '/fundme.png',
      url: '',
      github: 'https://github.com/Egnoel/foundry-fund-me',
    },
    {
      id: 5,
      name: 'Crowdfunding DApp',
      description:
        'A DAap where users can create and fund their favourite campaigns.',
      image: 'https://github.com/Egnoel/Crowdfunding_DApp/raw/main/image.png',
      url: 'https://crowdfunding-d-app-beta.vercel.app/',
      github: 'https://github.com/Egnoel/Crowdfunding_DApp',
    },
    {
      id: 6,
      name: 'XY Games Landing Page',
      description: 'A landing page for a gaming website',
      image:
        'https://github.com/Egnoel/Gaming_website/raw/main/img/thumbnail.png',
      url: 'https://gaming-website-liard.vercel.app/',
      github: 'https://github.com/Egnoel/Gaming_website',
    },
  ];
  return (
    <div className="flex flex-col gap-5" id={id}>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-5xl">Projects</h2>
        <p className="text-current/55 text-2xl">Things I've built so far</p>
      </div>
      <div className="flex flex-row gap-7 flex-wrap items-center justify-center mt-3">
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-300 w-96 shadow-sm">
            <figure>
              <img
                src={project.image}
                alt={project.name}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-between">
                <a href={project.github} className="btn btn-secondary">
                  <FaGithub />
                </a>
                {project.url && (
                  <a href={project.url} className="btn btn-primary">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
