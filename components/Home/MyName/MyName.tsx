import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";
import HomeParticles from "../Particles/HomeParticles";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <>
      <div
        className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52 text-center z-20"
      >
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 6.1,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.5,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-AATextAccent/50 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Emile Junior ADA
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 6.2,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.6,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-AATextAccent font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Transforme vos défis en succès.
        </motion.h2>
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 6,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.4,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-AATextAccent font-bold font-mono mt-10 "
        >
          <TypeAnimation
            sequence={[
              "Je suis Emile Junior ADA",
              1000,
              "Je suis Graphic designer",
              1000,
              "Je suis Développeur fullstack",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </motion.span>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 6.3,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.7,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="text-AATextAccent font-light font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
        >
          Je suis <span className="text-AAsecondary">ingénieur logiciel</span>,
          doté d&apos;une expertise affirmée en résolution de problèmes.{" "}
          <br className="2xl:block hidden" />
          Je me concentre particulièrement sur la conception d&apos;expériences
          numériques remarquables, <br className="2xl:block hidden" />
          et mon domaine d&apos;expertise est le
          <span className="text-AAsecondary">
            {" "}
            développement web ( o_o&apos; et mobile).
          </span>
        </motion.h3>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: {
              delay: props.finishedLoading ? 0 : 6.4,
              duration: props.finishedLoading ? 0 : 0.2,
            },
            y: {
              delay: props.finishedLoading ? 0 : 10.8,
              duration: props.finishedLoading ? 0 : 0.2,
            },
          }}
          className="mt-12"
        ></motion.div>
      </div>
    </>
  );
}
