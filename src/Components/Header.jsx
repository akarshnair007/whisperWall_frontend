import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/AuthSlice";

const Header = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    toast.success("You are now logged out");
    dispatch(logout());
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username);
    }
  }, []);

  return (
    <>
      <header className="flex flex-row justify-between items-center w-full py-4 px-4 sm:px-8 bg-[#3B3C3D] opacity-90">
        <Link to={"/"}>
          <motion.img
            className="h-6 sm:h-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            alt="Career Connect Logo"
            src="/logo.png"
          />
        </Link>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex gap-5 items-center"
        >
          {username === "" ? (
            <div className="flex gap-5">
              <Link to={"/register"}>
                <button className="bg-[#212121] text-white text-sm sm:text-lg px-3 py-1 rounded-md w-full sm:w-auto">
                  Register
                </button>
              </Link>

              <Link to={"/login"}>
                <button className="bg-[#212121] text-white text-sm sm:text-lg px-3 py-1 rounded-md w-full sm:w-auto">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-5 items-center ">
              <p className="font-light text-white text-xl">
                Welcome <span className="font-bold">{username}</span>
              </p>
              <FontAwesomeIcon
                icon={faPowerOff}
                className="fa-2x text-white cursor-pointer"
                onClick={(e) => logoutHandler(e)}
              />
            </div>
          )}
        </motion.div>
      </header>
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </>
  );
};

export default Header;
