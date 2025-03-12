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
      image:
        'https://camo.githubusercontent.com/fdcb9a4a998182dc3d8edaa6c38ca674bc89eafcbdd3f9eec815aa0b9ba9f30c/68747470733a2f2f6769746875622d70726f64756374696f6e2d757365722d61737365742d3632313064662e73332e616d617a6f6e6177732e636f6d2f37303031333938362f3432313931393430372d65336630363766342d656166652d346163342d613763352d3739356139626434396436632e706e673f582d416d7a2d416c676f726974686d3d415753342d484d41432d53484132353626582d416d7a2d43726564656e7469616c3d414b494156434f44594c5341353350514b345a41253246323032353033313225324675732d656173742d312532467333253246617773345f7265717565737426582d416d7a2d446174653d3230323530333132543133353932305a26582d416d7a2d457870697265733d33303026582d416d7a2d5369676e61747572653d3263636538356435323963356136653639663737616636646262383031333436623261653234653139616534303762643031353634393763663337646339336226582d416d7a2d5369676e6564486561646572733d686f7374',
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
