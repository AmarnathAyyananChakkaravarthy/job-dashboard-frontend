import React from "react";
import { NavLink } from "react-router-dom";


import briefcaseIcon from '../assets/briefcase-02.svg';
import messageIcon from '../assets/message-square-01.svg';
import coinsHandIcon from '../assets/coins-hand.svg';
import notificationIcon from '../assets/bell-02.svg';
import userIcon from '../assets/user-photo.svg';
import { BiDownArrow } from "react-icons/bi";
import { ChevronDown } from "react-feather";
import { IoChevronDownOutline } from "react-icons/io5";
import { HiMiniChevronDown } from "react-icons/hi2";
import Hamburger from "hamburger-react";




export default function Header(props){

    const [menuClicked, setMenuClicked]= React.useState(false);

    const menuItems= [
        {
            title:"Jobs",
            link:"/jobs",
            icon: briefcaseIcon,
        },
        {
            title:"Messages",
            link:"/messages",
            icon: messageIcon,
        },
        {
            title:"Payments",
            link:"/payments",
            icon: coinsHandIcon,
        },
    ]
    return(
        <>
            <header>
                <div className="dektopHeader hidden p-2 py-4 sm:flex items-center justify-between shadow outline-none">
                    <div className="logo ml-1 sm:ml-10 bg-gray-200 h-8 w-12 sm:h-16 sm:w-24 flex items-center justify-center">
                        <span className="text-themeOrange text-sm font-bold sm:text-xl">Logo</span>
                    </div>
                    <ul className="menu border w-4/5 mx-2 sm:h-16 sm:w-1/3 border-gray-300 rounded-full p-1 sm:p-4 flex items-center justify-between">
                        {menuItems.map((item,index)=>
                            <li key={index} className="">
                                <NavLink aria-label={`${item.name} Nav Link`} to={item.link} className={({isActive,isPending})=>
                                        isActive
                                        ?"flex items-center justify-center px-1 py-2 sm:py-3 sm:px-8 gap-x-0.5 sm:gap-x-1 text-white font-medium  h-full rounded-full bg-themeOrange hover:bg-themeOrange/90 outline-none"
                                        :"flex items-center justify-center p-1 gap-x-0.5 sm:gap-x-1 text-gray-400 hover:text-themeOrang outline-none"
                                    }
                                >
                                    <div className="iconContainer relative">
                                        {item.title === "Messages" && <div className="w-1 h-1 sm:w-1.5 sm:h-1.5  bg-themeOrange rounded-full absolute top-0 right-0"></div>}
                                        <img className="h-4 w-4 sm:h-6 sm:w-6" src={item.icon} alt="Menu Icon" />
                                    </div>
                                    <span className="text-sm sm:text-lg">{item.title}</span>
                                </NavLink>

                            </li>
                        )}
                        
                    </ul>
                    <div className="user flex items-center justify-center w-12 h-7 sm:w-32 sm:h-14 ">
                        <div className="notification relative mx-1 sm:mx-2">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-themeOrange rounded-full absolute sm:right-0 top-0 right-1"></div>
                            <img className="w-5 h-5 sm:h-8 sm:w-8" src={notificationIcon} alt="Menu Icon" />
                        </div>
                        <div className="userIcon flex items-center justify-center mx-1 sm:mx-2">
                            <img className="w-4 h-4 sm:w-10 sm:h-10"src={userIcon} alt="User Profile Photo" />
                            <HiMiniChevronDown/>
                        </div>
                    </div>
                </div>

                <div className="mobileHeader sm:hidden p-2 py-3 shadow outline-none">
                    <div className="flex items-center justify-between">
                        <div className="logo ml-3 bg-gray-200 h-12 w-20 flex items-center justify-center">
                                <span className="text-themeOrange text-sm font-bold sm:text-xl">Logo</span>
                        </div>
                        <div className="flex items-center justify-end ">
                            <div className="user flex items-center ">
                                <div className="notification relative mx-1">
                                    <div className="w-1.5 h-1.5 bg-themeOrange rounded-full absolute sm:right-0 top-0 right-1"></div>
                                    <img className="h-6 w-6" src={notificationIcon} alt="Menu Icon" />
                                </div>
                                <div className="userIcon flex items-center mx-1 sm:mx-2">
                                    <img className="w-6 h-6"src={userIcon} alt="User Profile Photo" />
                                    <HiMiniChevronDown className=""/>
                                </div>
                            </div>
                            <div className={"w-12 h-12 "+(menuClicked?"text-themeOrange":"")}>
                                        <Hamburger
                                            size={20}
                                            toggled={menuClicked}
                                            toggle={setMenuClicked}
                                            duration={0.5}
                                            distance="sm"
                                            hideOutline={false}
                                            label={menuClicked?"Open Menu":"Close Menu"} rounded/>
                            </div>
                        </div>
                    </div>
                    {menuClicked&&
                        <nav className="mt-5">
                            <ul className="navLinks w-screen bg-white flex flex-col items-center justify-center gap-3 m-0 px-3 pt-2 pb-4 ">
                                {menuItems.map((item,index)=>
                                    <li key={index} className="">
                                        <NavLink aria-label={`${item.name} Nav Link`} to={item.link} className={({isActive,isPending})=>
                                                isActive
                                                ?"flex items-center justify-center px-6 py-2 gap-x-1 text-white font-medium  h-full rounded-full bg-themeOrange hover:bg-themeOrange/90 outline-none"
                                                :"flex items-center justify-center p-1 gap-x-1 text-gray-400 hover:text-themeOrang outline-none"
                                            }
                                        >
                                            <div className="iconContainer relative">
                                                {item.title === "Messages" && <div className="w-1.5 h-1.5  bg-themeOrange rounded-full absolute top-0 right-0"></div>}
                                                <img className="h-5 w-5" src={item.icon} alt="Menu Icon" />
                                            </div>
                                            <span className="text-base">{item.title}</span>
                                        </NavLink>

                                    </li>
                                )}
                            </ul>
                        </nav>
                    }
                </div>
            </header>
        </>
    )
}