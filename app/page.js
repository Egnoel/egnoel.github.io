'use client';
import { useThemeStore } from './lib/themeStore';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const { theme } = useThemeStore();
  return (
    <div data-theme={theme} className="flex flex-col py-3 px-6 gap-12">
      <Navbar />
      <Hero id="about" />
      <TechStack id="techStack" />
      <Projects id="projects" />
      <Footer />
    </div>
  );
}
