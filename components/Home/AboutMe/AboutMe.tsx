import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    [
      "Next.js/React",
      "ExpressJS",
      "Tailwind CSS/Bootstrap",
      "Radix/RadixVue",
      "Wordpress",
    ],
    [
      "Nuxt.js/Vue",
      "Laravel",
      "Framer Motion",
      "Mysql/PostgreSQL/MongoDB",
      "Photoshop",
    ],
  ];
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <span className="flex-none text-AATextAccent opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Moi
            </span>
          </div>
          <div className="bg-AATextAccent h-[2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header text-justify">
              <span className="text-AATextAccent/70">
                Salut ! Je m&apos;appelle Emile Junior ADA, et je suis passionné
                par le développement et le domaine de la technologie. Mon
                parcours dans l&apos;informatique a débuté en 2009, lorsque
                j&apos;ai commencé à créer mes premiers programmes,
                essentiellement des bots pour jouer à des jeux sur des serveurs
                de discussion en ligne. Depuis ce moment, j&apos;ai toujours su
                que je voulais me consacrer à l&apos;ingénierie logicielle et
                m&apos;immerger complètement dans l&apos;univers de la
                technologie.
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-AATextAccent/70">
                Dès l&apos;obtention de ma Licence en Génie logiciel et Réseaux,
                je n&apos;ai cessé de multiplier les expériences tout en
                continuant mes études, ce qui m&apos;a permis d&apos;affiner mes
                compétences dans le domaine du développement. Je me revendique
                ainsi{" "}
                <span className="text-AAsecondary">Développeur fullstack</span>,
                toujours prêt à repousser mes limites et mener à bien de
                nouveaux projets. A mes heures perdues, je fais également du
                <span className="text-AAsecondary"> Graphic design</span>{" "}
                (Réalisation de logos, flyers. . .) et du dessin
              </span>
            </div>
            <div className="font-Header text-justify">
              <span className="text-AATextAccent/70">
                Ah et je suis aussi un jouer d&apos;échecs :p .
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-AATextAccent/70">
                Voici quelques technologies majeures avec lesquelles j&apos;ai
                travaillé récemment :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-AATextAccent/70 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-AATextAccent/70 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-[440px] md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-13
               duration-300 absolute w-5/6 h-full border-2 border-AATextAccent translate-x-5 
               translate-y-15 rounded-full"
            ></div>

            <div className="absolute w-5/6 rounded-full overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AATextAccent opacity-10 duration-300 rounded-full overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.png"}
                className={"object-contain rounded-full"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded  translate-x-5 translate-y-5 border-2 border-AATextAccent"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AATextAccent opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
