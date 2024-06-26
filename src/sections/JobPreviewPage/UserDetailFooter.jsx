import React from "react";

import userLogoImg from '../../assets/user-photo-square.svg';

export default function UserDetailFooter(props){
    const userDetailContents=[
        {
            title:"Company size",
            content:"1k-2k Employees"
        },
        {
            title:"Type",
            content:"Private"
        },
        {
            title:"Sector",
            content:"Information Technology, Infrastructure"
        },
        {
            title:"Funding",
            content:"Bootstrapped"
        },
        {
            title:"Founded In",
            content:"2019"
        },
        {
            title:"Founded By",
            content:"Scott Farquhar, Mike Cannon-Brookes"
        },
    ];

    return(
        <>
            <section className="userDetails px-10 pt-3 pb-2 sm:px-24 sm:pt-9 sm:pb-8">
                <div className="w-full sm:w-3/5 ">
                    <div className="userTitle flex items-center gap-x-2">
                        <img src={userLogoImg} alt="User Logo" />
                        <span className="userCompanyName text-[#4F4F4F] text-xl">Atlassian</span>
                    </div>
                    <div className="userDetailContent grid grid-cols-2 mt-4 gap-x-20 sm:gap-x-0 ">
                        {userDetailContents.map((userDetail,index)=>
                            <div className="flex flex-col mb-2 sm:mb-6 font-medium" key={index}>
                                <span className="text-lightGray text-xs sm:text-sm ">{userDetail.title}</span>
                                <span className="text-boldTextColor text-sm sm:text-base">{userDetail.content}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}