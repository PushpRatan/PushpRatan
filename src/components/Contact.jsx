import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-primary-color to-secondary-color p-4 text-color-text-primary"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-color-text-secondary">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/pbgxgzpa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-color-text-primary focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-color-text-primary focus:outline-none"
            ></input>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-color-text-primary focus:outline-none"
            ></textarea>
            <button className="text-color-text-primary bg-gradient-to-b from-color-grad-secondary to-color-grad-primary px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
