import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Rintio() {
  const tasks = [
    {
      text: "Développement d'une plateforme de gestion de réservations et de voyages avec Java Spring Boot.",
      keywords: [],
    },
    {
      text: "Intégration continue et tests automatisés.",
      keywords: [],
    },
    {
      text: "Réalisation du site web de l'agence.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-AATextAccent sm:text-lg text-sm font-Arimo tracking-wide">
            Développeur Backend Java{" "}
            <span className="text-AAsecondary">@ Web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-AATextAccent/70">
            Mars 2018 - Mais 2018
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.rintio.fr/", "_blank")}
          >
            www.rintio.fr
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
