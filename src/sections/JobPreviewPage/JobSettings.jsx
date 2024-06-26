import React from "react";

import deleteIcon from '../../assets/trash-03.svg';
import editIcon from '../../assets/edit-02.svg';
import applicantsIcon from '../../assets/applicants.svg';
import matchesIcon from '../../assets/matches.svg';
import messagesIcon from '../../assets/messages.svg';
import viewsIcon from '../../assets/views.svg';
import { ChevronRight } from "react-feather";

export default function JobSettings(props){
    const statsList=[
        {
            title:"Applicants",
            icon:applicantsIcon,
            value:400,
        },
        {
            title:"Matches",
            icon:matchesIcon,
            value:100,
        },
        {
            title:"Messages",
            icon:messagesIcon,
            value:147,
        },
        {
            title:"Views",
            icon:viewsIcon,
            value:90,
        },
    ]
    return(
        <>
            <section 
                className={"sm:flex jobSettings absolute w-3/4 sm:w-1/4 top-0 right-0 border-l-2 border-gray-200 bg-gray-50 sm:bg-gray-50/90 h-full items-start justify-center "
                                + (props.openJobSetting? "":"hidden")}>
                
                <ChevronRight  onClick={()=>props.setOpenJobSetting(prev=> !prev)} className="closeJobSetttingSection sm:hidden cursor-pointer w-7 h-7 rounded-full text-gray-50 bg-themeOrange/90 absolute top-1 -left-3"/>
                <div className="container w-full sm:w-4/5 mt-9">
                    <div className="actionButtons flex items-center justify-center sm:justify-between">
                        <button className="deleteButton flex items-center justify-center gap-x-2 bg-themeOrange/10 mr-2 sm:mr-4 py-1 px-4 sm:py-2 sm:px-10 border border-themeOrange rounded outline-none">
                            <img className="w-5 h-5" src={deleteIcon} alt="Delete Icon" />
                            <span className="text-nowrap text-sm font-medium text-themeOrange">Delete Job</span>
                        </button>
                        <button className="editButton flex items-center justify-center gap-x-2 py-1 px-4 sm:py-2 sm:px-10 rounded outline-none border border-themeOrange bg-themeOrange ">
                            <img className="w-5 h-5" src={editIcon} alt="Edit Icon" />
                            <span className="text-nowrap text-sm font-medium text-white">Edit Job</span>
                        </button>
                    </div>

                    <div className="stats mt-6">
                        {statsList.map((stats,index)=>
                            <div key={index} className="statsItem m-3 pt-1 pb-4 border-b border-gray-300">
                                <div className="statsContent flex items-center justify-between p-2 ">
                                    <div className="statsTitle flex items-center gap-x-2">
                                        <img src={stats.icon} alt="Applicants Icon"/>
                                        <span className="text-[#4F4F4F] text-base font-medium">{stats.title}</span>
                                    </div>
                                    <div className="statValue">
                                        <span className="text-boldTextColor text-lg font-semibold">{stats.value}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}