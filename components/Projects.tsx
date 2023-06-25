import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Projects = () => {
  return (
    <div className="project">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>Feel free to explore 🔍</h3>
          <div className="projects-grid">
            <div className="pro pro__1">
              <div className="pro__img">
                <Link
                  target="_blank"
                  href="https://egnoelgptsummarize.netlify.app/"
                  rel="noopener noreferrer"
                >
                  <img src="/summarize2.png" alt="website" className="images" />
                </Link>
              </div>
              <div className="pro__text">
                <h3>GPT Summarize</h3>
                <p>
                  GPT summarize is a platform that let users get a summary of
                  articles they want to read. Helps save time while still
                  getting the idea of what the article is about
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>TailwindCSS</p>
                  <p>OpenAI</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Egnoel/GPT_SummarizeApp"
                    rel="noopener noreferrer"
                  >
                    Code <AiFillGithub className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://egnoelgptsummarize.netlify.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pro pro__1 reversed-proj">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://car-showcase-egnoel.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <img src="/car.png" alt="website" className="images" />
                </a>
              </div>
              <div className="pro__text">
                <h3>CarInfoHub</h3>
                <p>
                  CarInfoHub is a comprehensive web app that puts detailed
                  information about cars right at your fingertips. With our
                  user-friendly interface, you can easily search for cars by
                  their makers and models, allowing you to find the exact car
                  you're looking for.
                </p>
                <div className="stack">
                  <p>Next</p>
                  <p>TailwindCSS</p>
                  <p>TypeScript</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Egnoel/car_showcase"
                    rel="noopener noreferrer"
                  >
                    Code <AiFillGithub className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://car-showcase-egnoel.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pro pro__1 undefined">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://share-file-egnoel.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <img src="/share.png" alt="website" className="images" />
                </a>
              </div>
              <div className="pro__text">
                <h3>FileShare</h3>
                <p>
                  FileShare is a user-friendly web application that enables
                  users to easily upload and share images with others. It
                  streamlines the process of sharing images by providing a
                  convenient platform for storing and distributing them.
                </p>
                <div className="stack">
                  <p>Next</p>
                  <p>TypeScript</p>
                  <p>Node</p>
                  <p>MongoDB</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Egnoel/shareFile/tree/main"
                    rel="noopener noreferrer"
                  >
                    Code <AiFillGithub className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://share-file-egnoel.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pro pro__1 reversed-proj">
              <div className="pro__img">
                <a
                  target="_blank"
                  href="https://nft-showcase-seven.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <img src="/nft.png" alt="website" className="images" />
                </a>
              </div>
              <div className="pro__text">
                <h3>NFTSpotlight</h3>
                <p>
                  NFTSpotlight is a captivating web app that puts the spotlight
                  on the exciting world of Non-Fungible Tokens (NFTs). Dive into
                  a vibrant collection of digital art, collectibles, and unique
                  digital assets that are revolutionizing the concept of
                  ownership.
                </p>
                <div className="stack">
                  <p>React</p>
                  <p>TailwindCSS</p>
                  <p>ReactNative</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Egnoel/nft-showcase"
                    rel="noopener noreferrer"
                  >
                    Code <AiFillGithub className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://nft-showcase-seven.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
