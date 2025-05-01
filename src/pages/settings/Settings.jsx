import React, { useState } from "react";
import NavBar from "../../component/NavBar";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { TbClipboardList } from "react-icons/tb";
import User from "./users/User";
import Roles from "./roles/Roles";




const Settings = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <>
      <NavBar
        title="Settings"
        pagetitle={activeTab === "1" ? "User" : "Roles"}
      />
      <div className="cursor-pointer flex justify-between items-center ">
        <div className="font-layout-font flex gap-2  py-2 dark:text-white">
          <p
            className={`flex gap-2 items-center px-4 py-3 font-semibold rounded-sm text-sm ${
              activeTab === "1" ? "dark:bg-layout-dark bg-layout-light " : ""
            }`}
            onClick={() => setActiveTab("1")}
          >
            <TbBrandCampaignmonitor size={24}/> User
          </p>
          <p
            className={`flex  gap-2  items-center  px-4 py-3 font-semibold rounded-sm text-sm ${
              activeTab === "2" ? "dark:bg-layout-dark bg-layout-light" : ""
            }`}
            onClick={() => setActiveTab("2")}
          >
           <TbClipboardList size={24}/> Roles
          </p>
        </div>
      </div>
      {activeTab === "1" ?<User/>  : <Roles/> }
    </>
  );
};

export default Settings;
