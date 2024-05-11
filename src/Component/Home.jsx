import React from "react";
import pic from "../assets/images/kevin.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Home() {
  return (
    <div className="border-b  border-neutral-900 pb-20 lg:mb-100">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className=" heading flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-2xl lg:mt-16  lg:text-5xl "
            >
              Amardeep Malhotra
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" span-item bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="para my-4 max-w-xl py-6  tracking-tighter font-light"
            >
              I am a passionate full stack developer with a knack for crafting
              robust and scalable web applications. With 5 years-no experience,
              I have honed my skill in front-end technologies like React and
              Next.js as well as back and technologies like Node.js
              MySQL,PostgreSQL,and MangoDB.My goal is to leverage my expertise
              to create innovative solutions that drive business growth and
              deliver exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
