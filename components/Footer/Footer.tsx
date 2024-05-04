import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/MeijinK", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/emile-junior-ada-426068118/",
    Icon: LinkedinIcon,
  },
  { href: "https://www.instagram.com/titof_abdo/", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@abdellatif_anaflous", Icon: YoutubeIcon },
];

export default function Fotter(props: {
  myUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <a href={props.myUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-AATextAccent/70
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Emile Junior ADA
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon
              className={
                "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"
              }
            />
            <span className="">Code Source - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
