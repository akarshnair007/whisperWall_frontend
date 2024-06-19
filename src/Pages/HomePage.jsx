import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="main w-full h-screen">
      <Header />
      <div class="absolute top-0 z-[-2] h-auto w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="top_section flex justify-between items-center w-full mt-32 px-10 mb-5 overflow-x-hidden">
          <div className="left">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:text-2xl text-[10px] font-bold text-white mb-5"
            >
              WANNA SHARE YOUR SCERETS
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:text-xl text-[10px] font-bold text-white"
            >
              DON'T WORRY YOU WILL BE{" "}
              <span className=" text-teal-500">ANONYMOUS</span>
            </motion.h1>
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:px-6 sm:py-3 px-4 py-1 bg-[#212121] mt-3 text-sm sm:text-xl text-white rounded-3xl"
            >
              Regsiter
            </motion.button>
          </div>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/img_1.png"
            alt=""
            className="sm:w-[30%] w-[40%] sm:h-[50%]"
          />
        </div>
        <img src="/Vector_1.png" className="w-full h-1/3" alt="" />
        <img src="/Vector_2.png" className="w-full h-1/3" alt="" />
        <div className="w-full mid_section text-center">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=" font-extrabold text-white sm:text-3xl text-lg"
          >
            Who Are We?
          </motion.h2>
          <div className="px-10 flex flex-col gap-10 justify-center items-center">
            <div className="p1 flex items-center mb-4 sm:gap-10 gap-4">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="/img_2.png"
                alt=""
                className="sm:w-[20%] w-[20%]"
              />
              <motion.h4
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sm:text-2xl text-[13px] text-white font-semibold"
              >
                • Here you can share your Secrets
              </motion.h4>
            </div>
            <div className="p2 flex items-center mb-4 sm:ms-60 ms-1 gap-10">
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sm:text-2xl text-[13px] text-white font-semibold mr-4"
              >
                • Nobody will be knowing who you are
              </motion.h4>
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="/img_3.png"
                alt=""
                className="sm:w-[20%] w-[30%]"
              />
            </div>
            <div className="p3 flex items-center gap-10 sm:ms-20 ms-5 mb-5">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                src="/img_4.png"
                alt=""
                className="sm:w-[20%] w-[26%] mr-4"
              />
              <motion.h4
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sm:text-2xl text-sm text-white font-semibold"
              >
                • View others' secrets anonymously, securely.
              </motion.h4>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
