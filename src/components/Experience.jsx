import React from "react";
import java from "../assets/java.png";
import next from "../assets/nextjs.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongo from "../assets/mongo.png";
import spring from "../assets/spring.png";
import mysql from "../assets/mysql.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";

// Java Javascript ReactJs NextJs NodeJs SpringBoot Tailwind

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "JAVA",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: node,
      title: "Nodejs",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: next,
      title: "NextJs",
      style: "shadow-gray-400",
    },

    {
      id: 6,
      src: spring,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-secondary-color to-primary-color w-full h-screen pt-20 "
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full text-color-text-primary">
        <div>
          <p className="text-4xl font-bold border-b-4 border-color-text-secondary p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
