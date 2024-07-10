import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function HdDem() {
  const tasks = [
    {
      text: "Réalisation de l'application web de réservation de déménagement 'Deux Gars Un Camion' avec Vue3, Laravel, InertiaJs, Tailwindcss.",
      keywords: ["application", "web", "Vue3", "Laravel", "InertiaJs"],
    },
    {
      text: "Réalisation du CRM pou déménageurs Dem CRM.",
      keywords: ["Nuxt", "Api", "Laravel", "Typescript"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-AATextAccent sm:text-lg text-sm font-Arimo tracking-wide">
            Lead Tech <span className="text-AAsecondary">@ Web2</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-AATextAccent/700">
            Mars 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://www.agencedemenagement.com/", "_blank")
            }
          >
            www.agencedemenagement.com
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
