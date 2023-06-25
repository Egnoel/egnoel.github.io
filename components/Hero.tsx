import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Software Developer</h1>
              <p>
                A passionate developer who is always looking for the latest
                technology and innovations. Proven track record of creating and
                implementing successful front and back-end web applications.
                Looking to bring my skills to a tech company with global reach.
              </p>
              <span className="flex gap-3 flex-row absolute bottom-[3px] left-[120px]">
                <Link href="">
                  <Image
                    src="/Github.svg"
                    alt="github"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/linkedin.png"
                    alt="Linkedin"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </Link>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <div className="flex flex-row items-center gap-6">
              <Image
                src="/next.svg"
                alt="Next"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/react.svg"
                alt="React"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/nodejs.svg"
                alt="Nodejs"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/mongodb.svg"
                alt="MongoDB"
                width={50}
                height={50}
                className="object-contain"
              />
              <Image
                src="/tailwind.svg"
                alt="Tailwind"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
