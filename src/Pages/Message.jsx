import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getMessageUserAPI } from "../services/AllApi";
import { motion } from "framer-motion";

const Message = () => {
  const [userDetails, setUserDetails] = useState([]);

  const getAllMessages = async () => {
    const response = await getMessageUserAPI();
    setUserDetails(response.data);
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Header />
      <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="flex-grow overflow-auto">
        <div className="flex flex-col gap-4 justify-start items-center pt-8 pb-8">
          <div className="sm:w-[40%] w-[55%] min-h-[30%] bg-slate-600 rounded-3xl mb-4 sm:py-10 py-5">
            <Link
              to={"/messageForm"}
              className="flex gap-4 justify-center items-center "
            >
              <FontAwesomeIcon
                icon={faSquarePlus}
                className="sm:fa-3x fa-2x text-white"
              />
              <p className=" sm:text-2xl text-sm font-bold text-white">
                Create a Message
              </p>
            </Link>
          </div>
          {/* Message containers */}
          {userDetails.length > 0 ? (
            userDetails.map((item) => (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="msg-container w-[60%] min-h-[30%] bg-slate-600 rounded-3xl mb-4"
              >
                <div className="top_profile w-full flex items-center bg-slate-400 rounded-2xl p-2">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                    alt="Profile"
                    width="8%"
                    className="rounded-full mx-5 my-2"
                  />
                  <p className="text-2xl font-bold text-white">
                    {item?.username}
                  </p>
                </div>
                <div className="msgBox w-[90%] text-wrap ps-5 pt-3 text-2xl h-[120px] sm:mx-5 mx-3 my-2 bg-slate-300 rounded-3xl truncate overflow-hidden">
                  {item?.message}
                </div>
              </motion.div>
            ))
          ) : (
            <h1 className="text-2xl font-bold text-white">
              No Messages till Now
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Message;
