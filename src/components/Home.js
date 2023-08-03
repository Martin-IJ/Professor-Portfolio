import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { GlitchText } from "glitch-text";
import Img from "../assets/20230731_105238.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="relative w-full h-screen items-center flex justify-center bg-[#0a192f] overflow-hidden"
    >
      <img src={Img} alt="" className="home-img" />
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 absolute top-0 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          WISDOM OKAFOR
          {/* <GlitchText theme="red" text={"WISDOM OKAFOR"} /> */}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
          {/* <GlitchText theme="orange" text={"I'm a Full Stack Developer."} /> */}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="/about">
            <button className="text-white group border px-6 py-3 my-2 flex items-center ease-in duration-300 focus:bg-pink-800 hover:bg-pink-600 hover:border-pink-600">
              View More About Me
              <span className="duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
        {/* Social icons */}
        <div className="flex text-white gap-8 text-2xl pt-6">
          <FaGithub className="hover:text-pink-600" />
          <FaLinkedin className="hover:text-pink-600" />
          <FaFacebook className="hover:text-pink-600" />
          <FaInstagram className="hover:text-pink-600" />
        </div>
      </div>
    </div>
  );
};

export default Home;
