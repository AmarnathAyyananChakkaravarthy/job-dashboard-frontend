import React from "react";

import figmaIcon from "../assets/figma.svg";
import illustratorIcon from "../assets/adobeIllustrator.svg";
import adobeXDIcon from "../assets/adobeXD.svg";
import JobHeader from "../sections/JobPreviewPage/JobHeader";
import JobRequirements from "../sections/JobPreviewPage/JobRequirements";
import JobDescription from "../sections/JobPreviewPage/JobDescription";
import UserDetailFooter from "../sections/JobPreviewPage/UserDetailFooter";
import JobSettings from "../sections/JobPreviewPage/JobSettings";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";

export default function JobPreviewPage(props) {
  
  const [openJobSetting, setOpenJobSetting]= React.useState(false);

  const skillsRequired = [
    {
      title: "Figma",
      icon: figmaIcon,
    },
    {
      title: "Adobe Illustrator",
      icon: illustratorIcon,
    },
    {
      title: "Adobe XD",
      icon: adobeXDIcon,
    },
  ]

  return (
    <>
      <section className="jobPreview relative">
        <JobHeader/>
        
        <JobRequirements skillsRequired={skillsRequired}/>

        <JobDescription/>
        
        <UserDetailFooter/>

        <JobSettings openJobSetting={openJobSetting} setOpenJobSetting={setOpenJobSetting}/>

        <button 
          onClick={()=>setOpenJobSetting(prev=> !prev)}
          className="displayJobSettingsBtn fixed sm:hidden w-12 h-12 flex items-center justify-center bg-themeOrange rounded-full bottom-20 right-5">
          <FaRegEdit className="text-white w-5 h-5"/>
        </button>
      </section>
    </>
  );
}
