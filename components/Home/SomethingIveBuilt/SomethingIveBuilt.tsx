import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import ProjectContainer from "../../Images/ProjectContainer";
export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AATextAccent opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
            Quelques Projets
          </span>
        </div>
        <div className="bg-AAtertiary h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.dingastream.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <ProjectContainer
                src={"/dingastream.png"}
                alt={"Projet Dingastream"}
                dynamic
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center ">
            <div
              className="px-12 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text- font-bold">
                  Dingastream{" "}
                </span>
                <a
                  href="https://dingastream.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-AATextAccent font-bold text-xl hover:cursor-pointer">
                    La plateforme africaine de streaming musicale
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 font-semibold z-10">
                <p className="text-AATextAccent/70 text-justify md:text-right ">
                  Chez <span className="text-AAsecondary">Dingastream</span>,
                  j'ai joué un rôle important dans le cadre du développement du
                  projet en réalisant le{" "}
                  <span className="text-AAsecondary">site web</span> de
                  présentations du service. L'idée était d'offrir une vue
                  d'ensemble du service et des fonctionnalités disponibles sur
                  l'application mobile.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AATextAccent/70
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Dingastream</span>
                <span className="pr-4 z-10">Streaming</span>
                <span className="pr-4 z-10">web3</span>
                <span className="pr-4 z-10">Android/iOS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.dingastream.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
          {/* background for text in mobile responsive */}
          <div className="flex md:hidden w-full h-full z-0">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-30 z-10"></div>
              <ProjectContainer
                src={"/dingastream.png"}
                alt={"Projet Dingastream"}
                dynamic
              />
            </div>
          </div>
        </div>
        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://artists.dingastream.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <ProjectContainer
                src={"/dingartistes.png"}
                alt={"Projet Dingartistes"}
                dynamic={false}
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 space-y-2 w-full h-full content-center ">
            <div
              className="px-8 pt-20 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Dingartiste</span>
                <a
                  href="https://artists.dingastream.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" text-AATextAccent font-bold text-xl hover:cursor-pointer">
                    Inscription d'artistes/Envoie de sons
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 font-semibold z-10">
                <p className="text-AATextAccent/70 text-justify md:text-left ">
                  J'ai eu l'opportunité de mettre en place l'
                  <span className="text-AAsecondary">endpoint</span> permettant
                  aux artistes de
                  <span className="text-AAsecondary">s'inscrire</span> et d'
                  <span className="text-AAsecondary">uploader</span> leurs sons.
                  Il s'agit d'un processus rapide, simple, et intuitif,
                  accessible à n'importe quel artiste.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AATextAccent/70
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Dingartiste</span>
                <span className="pr-4 z-10">Reactjs</span>
                <span className="pr-4 z-10">Expressjs</span>
                <span className="pr-4 z-10">Streaming</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://artists.dingastream.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
            {/* background for text in mobile responsive */}
            <div className="flex md:hidden w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-30 z-10"></div>
                <ProjectContainer
                  src={"/dingartistes.png"}
                  alt={"Projet Dingartistes"}
                  dynamic={false}
                />
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.embauchecanada.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <ProjectContainer
                src={"/embauche.png"}
                alt={"Projet Embauche Canada"}
                dynamic
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 space-y-2 w-full h-full content-center ">
            <div
              className="px-12 pt-14 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text- font-bold">
                  Embauche Canada{" "}
                </span>
                <a
                  href="https://embauchecanada.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-AATextAccent font-bold text-xl hover:cursor-pointer">
                    Immigrer au canada
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 font-semibold z-10">
                <p className="text-AATextAccent/70 text-justify md:text-right ">
                  Projet <span className="text-AAsecondary">wordpress</span>{" "}
                  réalisé pour le compte d'un client afin de permettre
                  l'enregistrement rapide des candidatures au sein de son
                  agence. Il intègre également un système de paiement afin de
                  régler des factures pour les différentes prestations.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AATextAccent/70
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Canada</span>
                <span className="pr-4 z-10">Wordpress</span>
                <span className="pr-4 z-10">Stripe</span>
                <span className="pr-4 z-10">Web3</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.embauchecanada.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
            {/* background for text in mobile responsive */}
            <div className="flex md:hidden w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-30 z-10"></div>
                <ProjectContainer
                  src={"/embauche.png"}
                  alt={"Projet Embauche Canada"}
                  dynamic
                />
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://deuxgarsuncamion.com/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <ProjectContainer
                src={"/deux.png"}
                alt={"Projet Deux Gars"}
                dynamic
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 space-y-2 w-full h-full content-center ">
            <div
              className="px-8 pt-20 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Deux Gars Un Camion
                </span>
                <a
                  href="https://deuxgarsuncamion.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" text-AATextAccent font-bold text-xl hover:cursor-pointer">
                    Réservation en ligne pour un déménagement
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 font-semibold z-10">
                <p className="text-AATextAccent/70 text-justify md:text-left ">
                  Projet dont j'ai eu la charge intégrale, de la{" "}
                  <span className="text-AAsecondary">conception</span> à la
                  <span className="text-AAsecondary">réalisation</span>. Il
                  s'agit d'une platforme de{" "}
                  <span className="text-AAsecondary">réservation</span> en 3
                  étapes, afin de rendre accessible et facile les déménagements
                  en île de France.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AATextAccent/70
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Déménagement</span>
                <span className="pr-4 z-10">Vuejs</span>
                <span className="pr-4 z-10">Laravel</span>
                <span className="pr-4 z-10">Inertiajs</span>
                <span className="pr-4 z-10">Figma</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://deuxgarsuncamion/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
            {/* background for text in mobile responsive */}
            <div className="flex md:hidden w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-30 z-10"></div>
                <ProjectContainer
                  src={"/deux.png"}
                  alt={"Projet Deux Gars"}
                  dynamic
                />
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  5*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="https://www.6dem.com" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <ProjectContainer
                src={"/sysdem.png"}
                alt={"Projet Sysdem"}
                dynamic={false}
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 space-y-2 w-full h-full content-center ">
            <div
              className="px-12 pt-20 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text- font-bold">
                  Sysdem{" "}
                </span>
                <a
                  href="https://6dem.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-AATextAccent font-bold text-xl hover:cursor-pointer">
                    Gestion d'entreprises de déménagement
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 font-semibold z-10">
                <p className="text-AATextAccent/70 text-justify md:text-right ">
                  <span className="text-AAsecondary">CRM</span> simple et
                  intuitif conçu pour faciliter la{" "}
                  <span className="text-AAsecondary">gestion</span> et l'
                  <span className="text-AAsecondary">organisation</span> des
                  sociétés de déménagement. Il permet la création et l'édition
                  de devis, lettres de voiture et factures.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AATextAccent/70
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">CRM</span>
                <span className="pr-4 z-10">Déménagement</span>
                <span className="pr-4 z-10">Vuejs</span>
                <span className="pr-4 z-10">Laravel</span>
                <span className="pr-4 z-10">Inertiajs</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://www.6dem.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
          {/* background for text in mobile responsive */}
          <div className="flex md:hidden w-full h-full bg-opacity-70 z-0">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-30 z-10"></div>
              <ProjectContainer
                src={"/sysdem.png"}
                alt={"Projet Sysdem"}
                dynamic={false}
              />
            </div>
          </div>
        </div>
        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://sauki.io/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <ProjectContainer
                src={"/sauki.png"}
                alt={"Projet Sauki"}
                dynamic
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 space-y-2 w-full h-full content-center ">
            <div
              className="px-8 pt-20 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Sauki</span>
                <a
                  href="https://sauki.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" text-AATextAccent font-bold text-xl hover:cursor-pointer">
                    Digitalisation des process administratifs
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 font-semibold z-10">
                <p className="text-AATextAccent/70 text-justify md:text-left ">
                  Platforme conçue afin de permettre aux{" "}
                  <span className="text-AAsecondary">administrations</span> de
                  rejoindre le mouvement{" "}
                  <span className="text-AAsecondary">"zero papier"</span> et se
                  <span className="text-AAsecondary"> moderniser</span>. Elle
                  intègre la création de{" "}
                  <span className="text-AAsecondary">
                    formulaires personnalisés
                  </span>{" "}
                  ainsi que de nombreuses options de{" "}
                  <span className="text-AAsecondary">customisation</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-AATextAccent/70
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Administrations</span>
                <span className="pr-4 z-10">Nuxtjs</span>
                <span className="pr-4 z-10">Laravel</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <a href="https://sauki.io/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
            {/* background for text in mobile responsive */}
            <div className="flex md:hidden w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-30 z-10"></div>
                <ProjectContainer
                  src={"/sauki.png"}
                  alt={"Projet Sauki"}
                  dynamic
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
