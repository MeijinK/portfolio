import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import HdDem from "./Descriptions/HdDem";
import Sauki from "./Descriptions/Sauki";
import Sysdem from "./Descriptions/Sysdem";
import Dingastream from "./Descriptions/Dingastream";
import Freelance from "./Descriptions/Freelance";
import Skyran from "./Descriptions/Skyran";
import South from "./Descriptions/South";
import Rintio from "./Descriptions/Rintio";
export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "L'agence du déménagement":
        return <HdDem />;
      case "Sauki.io":
        return <Sauki />;
      case "Sysdem":
        return <Sysdem />;
      case "Dingastream":
        return <Dingastream />;
      case "Freelance":
        return <Freelance />;
      case "Skyran Group":
        return <Skyran />;
      case "South ID":
        return <South />;
      case "Rintio":
        return <Rintio />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState(
    "La Kaverne Digitale"
  );
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <span className="text-AATextAccent opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Mes Expériences
        </span>
        <div className="bg-AATextAccent h-[2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false, false, false, false, false, false]);
  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left rounded hover:text-AAsecondary
             hover:bg-AATextAccent/10 font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500 px-1
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "bg-AATextAccent/10 text-AAsecondary"
                 : "text-AATextAccent"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="L'agence du déménagement"
            BarPosition={32}
            BarAvobePosition={129}
            DescriptionJob="L'agence du déménagement"
            CompanyNameBackgroundColorGreen={[
              false,
              true,
              false,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="Sauki.io"
            BarPosition={76}
            BarAvobePosition={257}
            DescriptionJob="Sauki.io"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              true,
              false,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="Sysdem"
            BarPosition={120}
            BarAvobePosition={385}
            DescriptionJob="Sysdem"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              true,
              false,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={4}
            CompanyName="Dingastream"
            BarPosition={164}
            BarAvobePosition={513}
            DescriptionJob="Dingastream"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              true,
              false,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={5}
            CompanyName="Freelance"
            BarPosition={208}
            BarAvobePosition={641}
            DescriptionJob="Freelance"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              false,
              true,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={6}
            CompanyName="Skyran Group"
            BarPosition={252}
            BarAvobePosition={769}
            DescriptionJob="Skyran Group"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              false,
              false,
              true,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={7}
            CompanyName="South ID"
            BarPosition={296}
            BarAvobePosition={897}
            DescriptionJob="South ID"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={8}
            CompanyName="Rintio"
            BarPosition={340}
            BarAvobePosition={1025}
            DescriptionJob="Rintio"
            CompanyNameBackgroundColorGreen={[
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              false,
              true,
            ]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded AATextAccent">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
