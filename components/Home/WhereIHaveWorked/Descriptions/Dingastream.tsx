import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Dingastream() {
  const tasks = [
    {
      text: "Développement de la platforme de streaming Dingastream.",
      keywords: ["streaming", "Dingastream"],
    },
    {
      text: "Mise en place de l'endpoint d'inscription et de chargement de sons artistes (MERN - MongoDb, ExpressJs, ReactJs, NodeJs).",
      keywords: [],
    },
    {
      text: "Réalisation du dashboard administrateur Dingastream.",
      keywords: [""],
    },
    {
      text: "Réalisation de la page d'accueil Dingastream (HTML5, CSS, JS).",
      keywords: [""],
    },
    {
      text: "Devops.",
      keywords: [""],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-AATextAccent sm:text-lg text-sm font-Arimo tracking-wide">
            Fullstack Developer <span className="text-AAsecondary">@ Web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-AATextAccent/70">
            Avril 2021 - Septembre 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.dingastream.com/", "_blank")
            }
          >
            www.dingastream.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-AATextAccent/70 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
