import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Skyran() {
  const tasks = [
    {
      text: "Projet de création d'un routeur avec gestion de bande passante intégrée. Création d'une distribution à partir de FreeBSD & LinuxFromScratch.",
      keywords: ["FreeBSD", "LinuxFromScratch"],
    },
    {
      text: "Réalisation de sites web.",
      keywords: [],
    },
    {
      text: "Réalisation d'affiches/flyers.",
      keywords: [],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-AATextAccent sm:text-lg text-sm font-Arimo tracking-wide">
            Developer & Graphic Designer{" "}
            <span className="text-AAsecondary">
              @ Network, System, Web2 & Design
            </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-AATextAccent/70">
            Octobre 2020 - Avril 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.skyran-group.com/", "_blank")
            }
          >
            www.skyran-group.com
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
