import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import { FaBars } from "react-icons/fa";

const TitleBar = ({ pageTitle, menuOpen, setMenuOpen }) => {
  const pathname = window.location.pathname;
  return (
    <div className="py-5 p-3 lg:p-8 w-full">
      <div className="flex items-center gap-4">
        <h1 className="font-[500] text-xl capitalize">{pageTitle}</h1>
        <div
          onClick={() => setMenuOpen(true)}
          className="text-black text-2xl flex md:hidden"
        >
          <FaBars />
        </div>
      </div>

      {/* mobile menu start */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] z-[99999]"
          onClick={() => setMenuOpen(false)}
        >
          <AnimatePresence>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className="fixed top-0 left-0 w-[272px] bg-[#031434] h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <div className=" py-6 mt-6">
                <img
                  src={Logo}
                  alt="An icon of the star war movie"
                  className="w-[100px] mx-auto"
                />
              </div>
              <div className="my-10">
                <div
                  className={
                    pathname === "/overview"
                      ? "flex justify-left bg-[#0A74DC] items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                      : "flex justify-left  items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                  }
                >
                  <div className="w-[17px] h-[16px] mx-[2rem] rounded bg-[#A9C1FF]"></div>

                  <div className="text-white font-semi-bold text-base">
                    <Link to="/overview">
                      <p>Overview</p>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    pathname === "/starship"
                      ? "flex justify-left bg-[#0A74DC] items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                      : "flex justify-left  items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                  }
                >
                  <div className="w-[17px] h-[16px]  mx-[2rem]  rounded bg-[#A9C1FF]"></div>
                  <div className="text-white font-semi-bold text-base">
                    <Link to="/starship">
                      <p>Starships</p>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    pathname === "/people"
                      ? "flex justify-left  bg-[#0A74DC] items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                      : "flex justify-left items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                  }
                >
                  <div className="w-[17px] h-[16px] rounded  mx-[2rem]  bg-[#FFA9EC]"></div>
                  <div className="text-white font-semi-bold text-base">
                    <Link to="/people">
                      <p>People</p>
                    </Link>
                  </div>
                </div>

                <div
                  className={
                    pathname === "/species"
                      ? "flex justify-left bg-[#0A74DC] items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                      : "flex justify-left items-center  py-[1rem] w-[90%] mx-auto rounded my-2"
                  }
                >
                  <div className="w-[17px] h-[16px] rounded  mx-[2rem]  bg-[#FDFFA9]"></div>
                  <div className="text-white font-semi-bold text-base">
                    <Link to="/species">
                      <p>Species</p>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* mobile menu end */}
    </div>
  );
};

export default TitleBar;
