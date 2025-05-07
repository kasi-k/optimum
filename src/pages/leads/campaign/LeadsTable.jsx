import React, { useEffect, useState } from "react";
import { LuEye } from "react-icons/lu";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FiTrash2 } from "react-icons/fi";
import DeleteModal from "../../../component/DeleteModal";
import {  LeadsTableData } from "../../../component/Data";


const LeadsTable = () => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <div className="">
      <div className="font-layout-font ">
        <div className="sticky top-0 z-10">
        <table className="w-full  dark:text-white whitespace-nowrap">
          <thead >
            <tr className="font-semibold text-sm dark:bg-layout-dark bg-layout-light border-b-2 dark:border-overall_bg-dark border-overall_bg-light">
              <th className="p-3 rounded-l-lg">S.no</th>
              {[
                "Name",
                "Contact Number",
                "Email",
                "Source",
                "Lead Status",
                "Notes",
                "Assigned Consultant",
              ].map((heading) => (
                <th key={heading} className="p-2">
                  <h1 className="flex items-center justify-center gap-1">
                    {heading} <HiArrowsUpDown className="dark:text-white" />
                  </h1>
                </th>
              ))}
              <th className="pr-2 rounded-r-lg">Action</th>
            </tr>
          </thead>
          </table>
          </div>
          <div className="overflow-auto no-scrollbar h-48 ">
            <table className="w-full whitespace-nowrap ">
          <tbody className="dark:bg-layout-dark bg-layout-light rounded-2xl dark:text-gray-200 text-gray-600 cursor-default">
            {LeadsTableData && LeadsTableData.map((data,index) => (
              <tr
                key={index}
                className="border-b-2 dark:border-overall_bg-dark border-overall_bg-light text-center"
              >
                <td className="rounded-l-lg ">{index +1}</td>
                <td>{data.name}</td>
                <td>{data.contactNumber}</td>
                <td>{data.email}</td>
                <td>{data.source}</td>
                <td>{data.leadStatus}</td>
                <td>{data.notes}</td>
                <td>{data.assignedConsultant}</td>
                <td className="pl-4 p-2.5 rounded-r-lg">
                  <div className="flex justify-center items-center gap-3">
                    <button
                      className=" cursor-pointer p-1 rounded-sm  bg-green-200 text-green-600"
                    >
                      <LuEye size={16} />
                    </button>
                    <button
                      onClick={() => setDeleteModal(true)}
                      className=" cursor-pointer p-1 rounded-sm  bg-red-200 text-red-500"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>

      {deleteModal && (
        <DeleteModal onclose={() => setDeleteModal(false)} title="Leads" />
      )}
    </div>
  );
};

export default LeadsTable;
