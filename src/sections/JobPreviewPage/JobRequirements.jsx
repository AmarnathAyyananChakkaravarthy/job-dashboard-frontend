import React from "react";

export default function JobRequirements({skillsRequired}) {
  return (
    <>
      <section className="requirements px-10 pt-3 pb-2 sm:px-24 sm:pt-9 sm:pb-8 border-b-2 ">
        <div className="w-3/5 grid gap-4 text-nowrap sm:flex sm:items-start sm:justify-between">
          <div className="skillsRequired">
            <span className="text-lightGray">Skills Required</span>
            <div className="skills text-textColor">
              {skillsRequired.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-1 my-2 border px-1 w-fit rounded-lg"
                >
                  <img src={skill.icon} alt="Skills Icon" />
                  <span className="text-sm">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="preferredLanguage">
            <span className="text-lightGray">Preferred Language</span>
            <div className="language text-base font-semibold my-2 text-boldTextColor">
              English
            </div>
          </div>
          <div className="type">
            <span className="text-lightGray">Type</span>
            <div className="typeText text-base font-semibold my-2 text-boldTextColor">
              Full Time
            </div>
          </div>
          <div className="yoe">
            <span className="text-lightGray">Years of Experince</span>
            <div className="yoeText text-base font-semibold my-2 text-boldTextColor">
              3+ Years of Experience
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
