import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/Bootstrap_logo.svg.png'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Img from '../assets/IMG_4849.jpg'

const Skills = () => {
  return (
    <div name='skills' className='skill-cont w-full h-screen text-gray-300'>
      <img src={Img} alt="" className='skill-img' />
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 pt-36 text-center sm:text-left flex flex-col justify-center w-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={HTML} />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={CSS} />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={JavaScript} />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={ReactImg} />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={GitHub} />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={Node} />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 h-20 mx-auto' src={Bootstrap} />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img alt='' className='w-20 mx-auto' src={Tailwind} />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
          <div>
          <Link to="/work">
            <button className="text-white group px-6 py-3 my-2 flex items-center ease-in duration-300">
              Lets continue to projects
              <span className="duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;