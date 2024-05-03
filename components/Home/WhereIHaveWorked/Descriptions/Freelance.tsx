import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelance() {
  const tasks = [
    {
      text: "Réalisation de la plateforme web pour le ferme agro-piscicole Nkometou Paradise en utilisant E-monsite et refonte utilisant Next.js.",
      keywords: ["E-monsite", "Next.js"],
    },
    {
      text: "Réalisation d'un site web pour Noushkha Headrwrap Artist.",
      keywords: [],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-AATextAccent sm:text-lg text-sm font-Arimo tracking-wide">
          Web Developer <span className="text-AAsecondary">@ Web3</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-AATextAccent/70">
          Octobre 2020
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
