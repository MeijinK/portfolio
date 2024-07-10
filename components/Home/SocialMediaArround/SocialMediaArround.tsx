import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

const IconClickableWithAnimation = (props) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon
          className={
            "w-6 h-6 text-AATextAccent hover:text-AAsecondary fill-current hover:cursor-pointer"
          }
        />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 6.6,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation
              Icon={GithubIcon}
              href={"https://github.com/MeijinK"}
            />
            {/* Linkedin icon */}
            <IconClickableWithAnimation
              Icon={LinkedinIcon}
              href={"https://www.linkedin.com/in/emile-junior-ada-426068118/"}
            />
          </div>
          <div className="h-28 w-0.5 bg-AATextAccent"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ x: "170%" }}
        animate={{ x: "0%" }}
        // ! change delay from 0 to 11
        transition={{
          x: {
            delay: props.finishedLoading ? 0 : 6.8,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed top-60 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-row space-x-6 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a
              href="mailto:abdellatif@anaflous.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" font-Header tracking-wider text-AATextAccent text-sm hover:text-AAsecondary hover:cursor-pointer">
                emilejuniorada<span className="text-AAsecondary">@</span>yahoo
                <span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-0.5 w-20 bg-AATextAccent"></div>
        </div>
      </motion.div>
    </>
  );
}
