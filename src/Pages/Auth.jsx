import React, { useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUserAPI, regiserUserAPI } from "../services/AllApi";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/AuthSlice";
import { motion, AnimatePresence } from "framer-motion";

const Auth = ({ register }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateUsername = (username) => {
    const usernameRegex = /^(?=.*[a-zA-Z]{4,})(?=.*\d)[a-zA-Z\d]{5,15}$/;
    return usernameRegex.test(username);
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    const { username, email, password } = userDetails;
    if (!username || !email || !password) {
      toast.info("Please fill the form");
    } else {
      if (!validateUsername(username)) {
        toast.info(
          "Username must be 5-15 characters long and it should contain both letters and numbers."
        );
      } else {
        const result = await regiserUserAPI(userDetails);
        if (result.status >= 200 && result.status < 300) {
          console.log(result);
          toast.success("User has been registered");
          setUserDetails({
            username: "",
            email: "",
            password: "",
          });
          setTimeout(() => {
            navigate("/login");
          }, 4000);
        } else if (result.response.status === 401) {
          console.log(result);
          toast.warning("User already exists");
        } else {
          console.log(result);
          toast.warning("Something went wrong");
        }
      }
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;
    console.log(email, password);
    if (!email || !password) {
      toast.info("Please fill the form");
    } else {
      const result = await loginUserAPI(userDetails);
      console.log(result.data);

      if (result.status === 200) {
        dispatch(login());
        toast.success("User is logged In");
        sessionStorage.setItem(
          "user",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        setTimeout(() => {
          navigate("/messagesPage");
        }, 4000);
      } else {
        toast.warning("Invalid username or password");
      }
    }
  };

  return (
    <div className="main w-full h-screen overflow-y-hidden">
      <Header />
      <div className="top-0 z-[-2] h-auto w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="relative sm:w-[50%] w-[95%] bg-[#1a171734]  sm:h-[75%] h-[55%] rounded-3xl border-2 border-[#1a1717]">
            <AnimatePresence>
              {register ? (
                <motion.h1
                  key="signup-title"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mt-3 text-white font-extrabold text-xl"
                >
                  Sign-Up to Your account
                </motion.h1>
              ) : (
                <motion.h1
                  key="signin-title"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center mt-3 text-white font-extrabold text-xl"
                >
                  Sign-In to Your account
                </motion.h1>
              )}
            </AnimatePresence>
            <form
              action=""
              className={`flex flex-col items-center gap-5 ${
                register ? `pt-3` : `pt-10`
              }`}
            >
              <AnimatePresence>
                {register && (
                  <motion.div
                    key="username-field"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-10 mt-5"
                  >
                    <label
                      htmlFor=""
                      className="text-2xl font-semibold text-white"
                    >
                      Username:
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your unique Username"
                      value={userDetails.username}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          username: e.target.value,
                        })
                      }
                      className="px-5 py-3 outline-none border-2 border-slate-700 bg-[#202030] rounded-2xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center justify-center gap-10 mt-5"
              >
                <label htmlFor="" className="text-2xl font-semibold text-white">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={userDetails.email}
                  className="px-5 py-3 outline-none border-2 ms-12 border-slate-700 bg-[#202030] rounded-2xl"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center gap-10 mt-5 sm:mb-0 mb-5"
              >
                <label htmlFor="" className="text-2xl font-semibold text-white">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={userDetails.password}
                  className="px-5 py-3 outline-none border-2 border-slate-700 bg-[#202030] rounded-2xl"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    })
                  }
                />
              </motion.div>
              <div>
                {register ? (
                  <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className={`px-8 py-2 text-lg bg-slate-700 text-white rounded-2xl ${
                      !register && `mt-6`
                    }`}
                    onClick={(e) => registerHandler(e)}
                  >
                    Register
                  </motion.button>
                ) : (
                  <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className={`px-8 py-2 text-lg bg-slate-700 text-white rounded-2xl ${
                      !register && `mt-6`
                    }`}
                    onClick={(e) => loginHandler(e)}
                  >
                    Login
                  </motion.button>
                )}
              </div>
              {register ? (
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className=" font-semibold text-white"
                >
                  Already Have An Account?{" "}
                  <Link to={"/login"}>
                    <span className=" font-extrabold text-[#393955]">
                      Log In
                    </span>
                  </Link>
                </motion.p>
              ) : (
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className={` font-semibold text-white ${!register && `mt-8`}`}
                >
                  Don't Have An Account?{" "}
                  <Link to={"/register"}>
                    <span className=" font-extrabold text-[#393955]">
                      Register
                    </span>
                  </Link>
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer theme="dark" autoClose={2000} position="top-right" />
    </div>
  );
};

export default Auth;
