import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-secondary-color to-primary-color text-color-text-primary"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-color-text-secondary">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Pushp Ratan, a Full-Stack Developer and 2023 BTech graduate from
          Heritage Institute of Technology. Proficient in JavaScript, ReactJS
          for front-end, and Java Spring Boot for back-end, I have completed
          over 10 projects and an enriching internship at Techmihirnaik Group.
          <br />
          <br />
          During my internship, I contributed to "Shopica," an e-commerce
          application, by creating user interfaces, ensuring responsiveness,
          adding search functionality, and working with components in ReactJS
          and NodeJS. I also gained experience in test-driven development.
          <br />
          <br />
          My technical skills, dedication to quality, and collaborative nature
          drive me to create innovative and efficient digital solutions. Explore
          my portfolio to see the projects and experiences that highlight my
          journey in full-stack development.
        </p>
      </div>
    </div>
  );
};

export default About;
