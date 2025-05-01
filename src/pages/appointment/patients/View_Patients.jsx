import React from "react";
import { IoClose } from "react-icons/io5";

const View_Patients = ({ onclose }) => {
  return (
    <div className=" font-layout-font fixed inset-0 flex justify-center items-center backdrop-blur-sm z-10">
      <div className="dark:bg-layout-dark bg-layout-light rounded-lg drop-shadow-md dark:text-white w-fit h-fit">
        <p
          className="grid place-self-end -mx-4 -my-4 dark:bg-layout-dark bg-layout-light shadow-sm  py-2.5 px-2.5 rounded-full"
          onClick={onclose}
        >
          <IoClose className="size-[20px]" />
        </p>
        <div className="grid justify-center px-8 py-4 gap-6">
          <p className="text-center font-semibold text-lg">Patient</p>
          <div className="p-2">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex  col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                 Patient ID
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent col-span-1  text-slate-100 text-sm">
                #2345</p>
              </div>
              <div className="flex  col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Name
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent col-span-1  text-slate-100 text-sm">
                Dinesh Kumar</p>
              </div>
              <div className="flex  col-span-2 justify-between items-center gap-10">
                <label className=" text-white font-medium col-span-1">
                  Phone number
                </label>

                <p className="p-2 rounded-md w-52 bg-transparent col-span-1 text-slate-100 text-sm">
                  7550378859
                </p>
              </div>
              <div className="flex col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Email ID
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent  col-span-1  text-slate-100 text-sm">
                  vishva2202005@gamil.com
                </p>
              </div>{" "}
              <div className="flex col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Age
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent  col-span-1 text-slate-100  text-sm">
                  18
                </p>
              </div>
              <div className="flex col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Height
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent  col-span-1  text-slate-100  text-sm">
                  6ft
                </p>
              </div>
              <div className="flex col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Weight
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent col-span-1 text-slate-100  text-sm">
                  13.09
                </p>
              </div>
              <div className="flex  col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Location
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent col-span-1 text-slate-100  text-sm">
                  Chennai
                </p>
              </div>
              <div className="flex  col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Address
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent col-span-1 text-slate-100  text-sm">
                  Address
                </p>
              </div>
              <div className="flex sm:col-span-2 justify-between items-center">
                <label className=" text-white font-medium col-span-1">
                  Status
                </label>
                <p className="p-2 rounded-md w-52 bg-transparent col-span-1 text-slate-100  text-sm">
                  active
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 my-4 mx-6 text-sm font-normal">
          <p
            className="cursor-pointer border border-select_layout-dark text-select_layout-dark  px-6 py-1.5 rounded-sm"
            onClick={onclose}
          >
            Cancel
          </p>
      
        </div>
      </div>
    </div>
  );
};

export default View_Patients;
