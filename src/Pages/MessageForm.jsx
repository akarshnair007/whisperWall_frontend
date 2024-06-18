import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { messageUserAPI } from "../services/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (token) {
      console.log(message);
      console.log(token);
      const messageObject = { message };
      console.log(messageObject);
      let reqHeader = {
        Authorization: `Bearer ${token}`, //bearer means for verify we don't need any other document
      };
      const result = await messageUserAPI(messageObject, reqHeader);
      if (result.status >= 200 && result.status < 300) {
        toast.success("User wow");
      } else {
        toast.warning("Error");
      }
    }
  };

  return (
    <div className="main w-full h-screen relative">
      <Header />
      <div className="absolute top-0 z-0 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-y-hidden">
        <div className="absolute w-full flex justify-end pt-20 text-white font-semibold text-base sm:text-lg pe-3 z-10">
          <Link to="/messagesPage">
            <p className="cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeftLong} className="me-2" />
              Back to Message page
            </p>
          </Link>
        </div>

        <div className="w-full mt-10 h-screen flex items-center justify-center z-0">
          <div className="relative w-[90%] sm:w-[70%] lg:w-[50%] bg-[#1a171734] h-[70%] sm:h-[80%] rounded-3xl border-2 border-[#1a1717]">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-4 text-white font-extrabold text-lg sm:text-xl lg:text-2xl"
            >
              Create Your Message
            </motion.h1>

            <motion.form
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col items-center gap-5 pt-5 sm:pt-10"
            >
              <div className="flex flex-col justify-center items-center gap-5 mt-2 w-full px-4">
                <label
                  htmlFor="message"
                  className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left"
                >
                  Your Message:
                </label>
                <textarea
                  id="message"
                  rows={5}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full sm:w-[80%] lg:w-[70%] px-5 py-3 outline-none border-2 border-slate-700 bg-[#202030] rounded-2xl text-white"
                />
              </div>

              <div className="mt-4">
                <motion.button
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  onClick={(e) => submitHandler(e)}
                  className="px-8 py-2 text-lg bg-slate-700 text-white rounded-2xl hover:bg-slate-600 transition"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default MessageForm;
