import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="flex flex-row items-center  relative">
          <div className="text-side">
            <h4>About me</h4>
            <h3>
              A dedicated Software Developer <br />
              Reaching the world trought skills and passion
            </h3>
          </div>
          <div className="absolute top-10 left-[365px]">
            <Image
              src="/code-tech-dev-svgrepo-com.svg"
              alt="Dev"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
        <div className="text-[#767676] text-3xl font-medium ">
          My goal is to help companies achieve success through efficient and
          impactful web solutions. With experience in both front-end and
          back-end development, I utilize technologies such as React.js,
          Node.js, Express.js, and MongoDB to create scalable and responsive
          applications. Throughout my career, I have contributed to challenging
          projects, personal and for clients. This experience has allowed me to
          enhance my skills and achieve tangible results. In addition to my
          technical skills, I am an effective communicator and value teamwork. I
          believe that the success of a project relies on clear communication
          and effective collaboration among all team members. I am ready to work
          in partnership with you to achieve the desired objectives. If you are
          looking for a committed, passionate, and experienced developer, I am
          here to assist you. Let's work together to transform your ideas into
          impactful web solutions! And I look forward to collaborating with you!
        </div>
      </div>
    </div>
  );
};

export default About;
