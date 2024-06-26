import React from "react";
import TabSections from "../components/TabSections";
import JobPreviewPage from "./JobPreviewPage";

export default  function JobDashboard(props){
    const [tabSelected, setTabSelected] = React.useState("Job Preview");

    const tabItems= [
        {
            title:"Job Preview",
        },
        {
            title:"Application",
        },
        {
            title:"Match",
        },
        {
            title:"Messages",
        },
    ]
    return(
        <>
            <body className="">
                <TabSections tabSelected={tabSelected} setTabSelected={setTabSelected} tabItems={tabItems}/>

                {tabSelected === "Job Preview" ? (
                    <JobPreviewPage/>
                ) :  (
                    <h1 className="flex items-center justify-center">Page yet to be developed!</h1>
                )}
            </body>
        </>
    )
}