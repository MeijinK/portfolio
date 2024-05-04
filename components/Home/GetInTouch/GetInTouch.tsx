import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full px-4 h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <span className="text-AATextAccent opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Vous aimez discuter ?
        </span>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-AAsecondary text-3xl sm:text-4xl sm:text-center font-bold tracking-wider opacity-85">
        <span className="uppercase">ç</span>a tombe bien j&apos;aime vous lire
      </span>
      <p className="flex font-Header tracking-wider text-AATextAccent/70 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Que vous ayez besoin de conseils, que vous ayez des opportunités à
        partager ou que vous ayez des questions. Je suis disponible via ma boîte
        mail et je réponds dans la minute.
      </p>
      <div className="pt-4">
        <a
          href="mailto:emilejuniorada@yahoo.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <button
            className="font-mono text-sm border-AATextAccent mx-2
           hover:bg-AATextAccent hover:text-white text-AATextAccent px-8 py-4 border-[1.5px] rounded-full "
          >
            Faites l&apos;essai si vous ne me croyez pas
          </button>
        </a>
      </div>
    </div>
  );
}
