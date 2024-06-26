import React from "react";

export default function TabSections({tabSelected, setTabSelected, tabItems}){
    return(
        <>
           <div className="border-b-2 border-gray-200 px-7 text-nowrap sm:px-14">
                <ul className="tabs grid grid-flow-col overflow-x-scroll sm:overflow-auto gap-x-4 sm:gap-1 h-full p-0 w-full sm:w-1/2">
                    {tabItems.map((tabs,index)=>
                        <li key={index} className="flex flex-col m-0 items-center cursor-pointer">
                            <div
                                onClick={() => setTabSelected(tabs.title)}
                                className={
                                "flex font-medium text-sm sm:text-xl py-5" +
                                (tabSelected === tabs.title
                                    ? " text-themeOrange font-semibold hover:text-themeOrange/85"
                                    : " text-lightGray border-transparent hover:text-themeOrange")
                                }
                            >
                                {tabs.title}
                            </div>
                            {tabSelected=== tabs.title &&<div className="w-12 h-0.5 bg-themeOrange"></div>}
                        </li>
                    )}
                    
                    
                </ul>
            </div> 
        </>
    )
}