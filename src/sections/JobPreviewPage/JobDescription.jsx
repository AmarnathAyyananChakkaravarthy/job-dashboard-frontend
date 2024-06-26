import React from "react";

export default function JobDescription(props) {
  return (
    <>
      <section className="jobDescription px-10 pt-3 pb-10 sm:px-24 sm:pt-9 sm:pb-8 border-b-2">
        <div className="jdTitle text-sm text-lightGray mb-2">About the job</div>
        <div className="jdContent text-boldTextColor text-sm sm:text-base font-medium">
          <ol className=" list-decimal list-inside">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ol>
          <span>Benefits:</span>
          <ul className="list-inside list-disc pl-2">
            <li>Health Insurance</li>
            <li>Provident Fund</li>
          </ul>
          <span>Schedule:</span>
          <ul className="list-inside list-disc pl-2">
            <li>Day shift</li>
          </ul>
          <span>Supplement pay types:</span>
          <ul className="list-inside list-disc pl-2">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <span>Work Location: In person</span>
        </div>
      </section>
    </>
  );
}
