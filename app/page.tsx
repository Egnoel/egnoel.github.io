import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <nav className="nav">
        <h3 className="logo">Egnoel</h3>
        <ul className="flex flex-row gap-2 ">
          <li>
            <a href="#home" className="link-style">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="link-style">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="link-style">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="link-style">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="mobile-nav closed-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>
    </main>
  );
}
