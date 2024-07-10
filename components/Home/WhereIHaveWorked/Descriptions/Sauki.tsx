import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Sauki() {
  const tasks = [
    {
      text: "Développement de l’application web de gestion de documents administratifs Sauki.io, utilisant Nuxt.js, Laravel",
      keywords: ["Sauki.io", "Nuxt.js", "Laravel"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-AATextAccent sm:text-lg text-sm font-Arimo tracking-wide">
            Fullstack Developer <span className="text-AAsecondary">@ Web2</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-AATextAccent/70">
            Octobre 2023 - Février 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.sauki.io", "_blank")}
          >
            www.sauki.io
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
