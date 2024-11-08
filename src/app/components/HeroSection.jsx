"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"; 


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale:1 }} 
        transition={{ duration: 0.5 }} 
        className="col-span-8 place-self-center text-center sm:text-left  justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
           Hello, I`m{" "}
           </span>
            <br></br>
              <TypeAnimation
              sequence={[
                `Rimsha Sheikh`,
                1000, 
                `Frontened Developer`,
                1000,
                'UI/UX Developer',
                1000
              ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                
              />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl">
            I’m a passionate Frontend Developer with a solid foundation in JavaScript, HTML, and CSS. I specialize in crafting clean, responsive, and user-friendly web interfaces.

            I have hands-on experience with Tailwind CSS, which I use to streamline styling and bring creative designs to life efficiently. Recently, I’ve been expanding my expertise into the Next.js ecosystem, where I’m building dynamic and performance-optimized web applications.

            I’m always excited to learn and apply new technologies to create impactful web experiences!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 bg-gray-800 to-secondary-500  hover:br-state-20 text-black">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 bg-gray-800  to-secondary-500 hover:bg-state-800 text-white  mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >Download Resume
              <a href="https://my-resume-delta-rust.vercel.app/"></a></span></button>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale:1 }} 
        transition={{ duration: 0.5 }} 
        className="col-span-4 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <img
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              src="http://img.freepik.com/premium-vector/girl-with-laptop-vector_951778-16402.jpg?w=740"
              alt="hero image"
              height={500}
              width={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default HeroSection;
