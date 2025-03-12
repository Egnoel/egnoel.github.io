import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="#about">
          About
        </a>
        <a className="link link-hover" href="#techStack">
          Tech Stack
        </a>
        <a className="link link-hover" href="#projects">
          Projects
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Egnoel" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-current"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.34.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.805 1.305 3.49.997.108-.775.418-1.305.76-1.605-2.666-.303-5.467-1.333-5.467-5.933 0-1.31.467-2.382 1.237-3.222-.125-.303-.536-1.524.116-3.176 0 0 1.01-.323 3.31 1.23.96-.267 1.98-.4 3-.404 1.02.004 2.04.137 3 .404 2.3-1.553 3.31-1.23 3.31-1.23.652 1.652.241 2.873.116 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.805 5.627-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.014 2.897-.014 3.293 0 .319.19.693.8.575C20.565 21.796 24 17.298 24 12 24 5.373 18.627 0 12 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/egnoel-neto/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-current"
            >
              <path d="M22.23 0H1.77C.79 0 0 .775 0 1.73v20.54C0 23.225.79 24 1.77 24h20.46c.98 0 1.77-.775 1.77-1.73V1.73C24 .775 23.21 0 22.23 0zM7.12 20.452H3.56V8.907h3.56v11.545zM5.34 7.36c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM20.452 20.452h-3.56v-5.61c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.72h-3.56V8.907h3.41v1.57h.05c.47-.89 1.61-1.83 3.31-1.83 3.54 0 4.19 2.33 4.19 5.36v6.445z" />
            </svg>
          </a>
          <a href="mailto:egnoel@hotmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              className="fill-current"
            >
              <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Egnoel
          Neto
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
