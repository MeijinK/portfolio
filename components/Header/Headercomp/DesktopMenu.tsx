import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import DesktopIconMenu from "../Headercomp/DesktopIconMenu";

export default function DesktopMenu(props) {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ y: "200%" }}
        animate={props.rotate ? { y: "25%" } : { y: "200%" }}
        transition={{ y: { duration: 0.4 } }}
        className="w-full fixed h-screen duration-300 z-20"
      >
        <div
          className="w-full h-5/6 bg-MobileNavBarColor flex flex-row 
        justify-center items-center space-x-20 font-sans"
        >
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span
              className="text-AAsecondary font-Text2 sm:text-base
             hover:text-white hover:cursor-pointer duration-300"
            >
              Moi
            </span>
          </Link>
          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span
              className="text-AAsecondary font-Text2 sm:text-base
             hover:text-white hover:cursor-pointer duration-300"
            >
              Mes Experiences
            </span>
          </Link>
          <Link
            to="SomethingIveBuiltSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span
              className="text-AAsecondary font-Text2 sm:text-base
             hover:text-white hover:cursor-pointer duration-300"
            >
              Quelques projets
            </span>
          </Link>
          <Link
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span
              className="text-AAsecondary font-Text2 sm:text-base
             hover:text-white hover:cursor-pointer duration-300"
            >
              Discutons
            </span>
          </Link>
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button
              className="rounded-full border font-Text2  border-AATextAccent
           hover:bg-AATextAccent hover:text-white py-2 sm:py-4 px-5 sm:px-10 text-AATextAccent"
            >
              Mon CV
            </button>
          </a>
        </div>
      </motion.div>
      <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
        <motion.div
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 5,
          }}
          className=" text-AAsecondary"
        >
          {/* Hide icon Designed by me */}

          <DesktopIconMenu
            rotate={props.rotate}
            setRotate={props.setRotate}
            setShowElement={props.setShowElement}
            ShowElement={props.ShowElement}
            finishedLoading={props.finishedLoading}
          />
        </motion.div>
      </div>
    </>
  );
}
