import React, { useState } from "react";
import NavBar from "../../../component/NavBar";
import { MdModeEdit } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AddFollowUp from "./AddFollowUp";

const ViewLeads = () => {
    const navigate = useNavigate();
    const [addFollowUp,setAddFollowUp] = useState(false)
  return (
    <>
      <NavBar title="Leads" pagetitle="View Leads" />
      <div className="font-layout-font mb-3 overflow-auto no-scrollbar">
        <div className="flex justify-end my-2  ">
          <button onClick={ () =>setAddFollowUp(true)} className="font-normal flex  items-center  gap-2 text-sm bg-select_layout-dark rounded-md text-white px-6 py-2.5 ">
          <FaRegFileAlt size={20} /> Add FollowUp
          </button>
        </div>
        <div className="grid  gap-4 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 my-4 ">
          <div className=" bg-[#454545] rounded-md drop-shadow-lg  ">
            <div className=" flex justify-between h-32"></div>
            <div className="dark:bg-layout-dark bg-layout-light flex justify-between items-center rounded-b-md p-4 ">
              <div className="mx-2 py-6">
                <span className="drop-shadow-md shadow-lg grid -mt-22  text-white font-semibold text-4xl bg-overall_bg-dark rounded-full  w-24 h-24 items-center justify-center ">
                  K
                </span>
                <p className=" mt-4 mx-3 dark:text-white font-semibold ">
                  Name
                </p>
                <p className="my-1 mx-3 dark:text-gray-200  font-extralight text-sm">
                  8974612300
                </p>
              </div>
              <div className="grid -mt-36 mx-2 my-2">
                <button className="flex items-center gap-1 px-4 bg-blue-200 text-blue-400 rounded-sm py-2">
                  <MdModeEdit />
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="  dark:bg-layout-dark bg-layout-light dark:text-white px-8 py-6 rounded-md  drop-shadow-lg row-span-2   ">
            <p className="font-semibold ">Follow Up</p>
            <div>
            <p className="font-semibold  flex  gap-4 mt-6">
              {" "}
              <span className="bg-blue-200 text-blue-400 px-2 py-2 rounded">
                {" "}
                <FaRegFileAlt />
              </span>
              Next Follow up on 30/09/2024
            </p>
            <p className=" text-xs mx-12 dark:text-gray-400 font-extralight ">Note</p>
            <p className=" text-sm mx-12 font-extralight dark:text-gray-50">Ravikumar 27/09/2024,10:00am</p>
            </div>
            <div>
            <p className="font-semibold  flex  gap-4 mt-6">
              {" "}
              <span className="bg-blue-200 text-blue-400 px-2 py-2 rounded">
                {" "}
                <FaRegFileAlt />
              </span>
              Next Follow up on 30/09/2024
            </p>
            <p className=" text-xs mx-12 dark:text-gray-400 font-extralight ">Note</p>
            <p className=" text-sm mx-12 font-extralight dark:text-gray-50">Ravikumar 27/09/2024,10:00am</p>
            </div>
            <div>
            <p className="font-semibold  flex  gap-4 mt-6">
              {" "}
              <span className="bg-blue-200 text-blue-400 px-2 py-2 rounded">
                {" "}
                <FaRegFileAlt />
              </span>
              Next Follow up on 30/09/2024
            </p>
            <p className=" text-xs mx-12 dark:text-gray-400 font-extralight ">Note</p>
            <p className=" text-sm mx-12 font-extralight dark:text-gray-100">Ravikumar 27/09/2024,10:00am</p>
            </div>
          </div>
          <div className=" grid text-sm  dark:bg-layout-dark bg-layout-light dark:text-white rounded-md drop-shadow-lg px-8 py-8 gap-2 ">
            <p className="mb-3 font-semibold">Leads Details</p>
            <p className=" grid  grid-cols-8 items-center">
              <p className="col-span-7">Leads ID</p>
              <span className=" dark:text-gray-200 font-extralight text-end">#58794</span>
            </p>
            <p className=" grid grid-cols-8 items-center">
            <p className="col-span-6"> Email ID</p>
              <span className=" dark:text-gray-200 font-extralight text-end"> ravikumar@gmail.com </span>
            </p>
            <p className=" grid grid-cols-8 items-center">
            <p className="col-span-7"> Status</p>
              <span className=" text-select_layout-dark font-normal text-end">
                Follow Up
              </span>
            </p>
            <p className="grid grid-cols-8 items-center">
            <p className="col-span-7"> Assign to sales Person</p>
              <span className="dark:text-gray-200 font-extralight text-end"> Name </span>
            </p>
            <p className=" grid grid-cols-8 items-center">
            <p className="col-span-7">Convert to Sales</p>
              <span className="dark:text-gray-200 font-extralight text-end"> Name </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end  mb-8 relative ">
            <p onClick={()=>navigate("/leads")}  className=" cursor-pointer text-lg dark:text-white absolute flex items-center gap-2 bg-select_layout-dark rounded-sm py-1.5 px-8 -bottom-10 right-0 ">
            <IoChevronBackSharp  /> back
            </p>
          </div>
          {addFollowUp && <AddFollowUp onclose={ ()=>setAddFollowUp(false)}/>}
    </>
  );
};

export default ViewLeads;
