import React from "react";

import FoodMAN from "../assets/portfolio/FoodMAN.jpg";
import IndeedClone from "../assets/portfolio/IndeedClone.png";
import MovieMAN from "../assets/portfolio/MovieMAN.jpg";
import ResumeBuilder from "../assets/portfolio/ResumeBuilder.jpg";
import VBS from "../assets/portfolio/VBS.jpg";
import CTTT from "../assets/portfolio/CustomTicTacToe.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ResumeBuilder,
      heading: "Resume Builder",
      sitelink: "https://elevateresume.netlify.app/",
      code: "https://github.com/PushpRatan/resume-builder",
    },
    {
      id: 2,
      src: CTTT,
      heading: "Custom TicTacToe",
      sitelink: "https://pushpratan.github.io/Custom-TicTacToe/",
      code: "https://github.com/PushpRatan/Custom-TicTacToe",
    },
    {
      id: 3,
      src: FoodMAN,
      heading: "FoodMan",
      sitelink: "https://foodman1.netlify.app/",
      code: "https://github.com/PushpRatan/FoodMan",
    },
    {
      id: 4,
      src: IndeedClone,
      heading: "Indeed Clone",
      sitelink: "https://newindeed.netlify.app/",
      code: "https://github.com/PushpRatan/Indeed-Clone",
    },

    {
      id: 5,
      src: VBS,
      heading: "Vaccine Booking System",
      // sitelink: "https://zippy-sorbet-03c2bc.netlify.app/",
      code: "https://github.com/PushpRatan/VaccinationBookinSystem",
    },

    {
      id: 6,
      src: MovieMAN,
      heading: "Movie Application",
      sitelink: "https://pushp-movie-app.netlify.app/",
      code: "https://github.com/PushpRatan/movie-app",
    },
  ];
  const handleClick = (sitelink) => {
    window.open(sitelink, "_blank", "noopener,noreferrer");
  };
  const CodeClick = (code) => {
    window.open(code, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-primary-color to-secondary-color w-full text-color-text-primary md:h-screen pb-20"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-color-text-secondary">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {portfolios.map(({ id, src, heading, sitelink, code }) => (
            <div key={id} className="shadow-md shadow-color-text-secondary rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-44 w-full"
              />
              <h2 className="flex items-center justify-center p-4">
                {heading}
              </h2>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClick(sitelink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => CodeClick(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
