import TitleBar from "../../UI/Molecules/TitleBar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";

function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const pathname = window.location.pathname;

  return (
    <>
      <div className="h-screen flex justify-content items-center text-black">
        <aside className="hidden bg-[#031434] w-[30%]  h-screen overflow-y-auto lg:block">
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
                pathname == "/overview"
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
                pathname == "/starship"
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
                pathname == "/people"
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
                pathname == "/species"
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
        </aside>

        <div className="h-screen -mt-[8rem] w-full mx-auto  bg-[#fafafa] overflow-y-auto overflow-x-hidden">
          <div className="sticky top-[60px] z-[20] bg-transparent">
            <TitleBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              pageTitle={pageTitle}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" max-h-screen"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
