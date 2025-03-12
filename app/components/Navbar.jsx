'use client';
import { themeChange } from 'theme-change';
import { useThemeStore } from '../lib/themeStore';
import { IoIosMail } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Egnoel</a>
      </div>
      <div className="flex flex-row gap-2.5 items-center">
        <ul className="menu menu-horizontal px-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#techStack">Tech Stack</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-4">
          <a href="https://github.com/Egnoel" target="_blank">
            <FaGithub className="size-7" />
          </a>
          <a href="https://www.linkedin.com/in/egnoel-neto/" target="_blank">
            <FaLinkedin className="size-7" />
          </a>
          <a href="mailto:egnoel@hotmail.com">
            <IoIosMail className="size-7" />
          </a>
        </div>
        <div>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <label className="flex cursor-pointer gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
