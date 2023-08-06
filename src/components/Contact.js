import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Img from '../assets/20221028_144455.jpg'

const Contact = () => {
  return (
    <div name='contact' className='contact-cont w-full h-screen flex flex-col justify-center items-center pt-16 p-4'>
      <img src={Img} alt="" className='contact-img' />
        <form method='POST' action="https://getform.io/f/5126be1c-e83c-4e2d-bc14-8a58d3d3bf14" target='blank' className='flex flex-col max-w-[600px] w-full mt-20 '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - onyedikawisdom3@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
        <div>
          <Link to="/">
            <button className="text-white group px-6 py-3 my-2 flex items-center ease-in duration-300">
              Go to Home
              <span className="duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Contact