import React from "react";

import locationIcon from "../../assets/marker-pin-01.svg";
import coinStackedIcon from "../../assets/coins-stacked-03.svg";

export default function JobHeader(props) {
  return (
    <>
      <section className="jobHeader px-10 pt-3 pb-2 sm:px-24 sm:pt-9 sm:pb-8 border-b-2">
        <div className="titleStats flex flex-col sm:flex-row sm:items-center">
          <div className="title text-xl sm:text-4xl font-semibold sm:mr-3.5">
            <span className="text-boldTextColor text-nowrap">Senior Product Designer</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full mr-3.5 hidden sm:block"></div>
          <div className="flex item-center">
            <div className="activityStats text-gray-400 pl-1 sm:pl-0 mr-3">
              <span>posted 2 days ago</span>
            </div>
            <div className="jobStatus flex items-center gap-x-1 sm:gap-x-1.5 text-xs sm:text-sm px-1 py-0.5 sm:px-2 bg-green-100 text-green-600 border border-green-300 rounded-full">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-600 rounded-full"></div>
              <span className="">Open</span>
            </div>
          </div>
        </div>

        <div className="loactionSalary flex flex-col items-start sm:flex-row sm:items-center pt-5 pb-3 sm:pb-0 gap-x-1 sm:gap-x-3 ">
          <div className="location flex items-center justify-between gap-x-1">
            <img
              className="h-4 w-4 sm:h-6 sm:w-6"
              src={locationIcon}
              alt="Location Icon"
            />
            <span className="text-textColor text-base font-medium sm:text-lg sm:font-medium">
              Delaware, USA
            </span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="salary flex items-center justify-between gap-x-1">
            <img
              className="h-4 w-4 sm:h-6 sm:w-6"
              src={coinStackedIcon}
              alt="Salary Icon"
            />
            <span className="text-textColor text-base font-medium sm:text-lg sm:font-medium ">
              $300k-$400k
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
