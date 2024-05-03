import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
const MobileMenu = (props) => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-MobileNavBarColor flex flex-col 
        justify-center items-center space-y-8 font-sans"
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
              className="text-AAsecondary font-Text2 text-sm sm:text-base
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
              className="text-AAsecondary font-Text2 text-sm sm:text-base
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
              className="text-AAsecondary font-Text2 text-sm sm:text-base
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
              className="text-AAsecondary font-Text2 text-sm sm:text-base
             hover:text-white hover:cursor-pointer duration-300"
            >
              Discutons
            </span>
          </Link>
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button
              className="rounded-full border font-Text2  border-AATextAccent
           hover:bg-AATextAccent hover:text-white py-2 sm:py-4 px-5 sm:px-10 text-xs text-AATextAccent"
            >
              Mon CV
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;
