import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../App.css";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-primary-color to-secondary-color text-color-text-primary"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Web Developer
          </h2>

          <p className="text-color-text-secondary py-4 max-w-md">
            I am a Developer, with a strong desire to learn and grow. I strive
            to create visually stunning and functional websites. I am constantly
            exploring new technologies and trends in the industry to stay ahead
            of the curve and deliver cutting-edge solutions
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-color-grad-secondary to-color-grad-primary cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={27} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My profile"
            className=" w-2/3 md:w-50 px-2 mx-auto animate-border-radius"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
