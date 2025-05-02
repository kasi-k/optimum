import React from "react";
import { IoClose } from "react-icons/io5";
import { campaignData } from "../../../component/Data";

const CampaignRun = ({ onclose }) => {
  return (
    <div className=" font-layout-font fixed inset-0 flex justify-center items-center backdrop-blur-sm z-10">
      <div className="dark:bg-overall_bg-dark bg-overall_bg-light rounded-lg drop-shadow-md dark:text-white w-fit h-fit">
        <p
          className="grid place-self-end -mx-4 -my-4 dark:bg-layout-dark bg-layout-light shadow-sm  py-2.5 px-2.5 rounded-full"
          onClick={onclose}
        >
          <IoClose className="size-[20px]" />
        </p>
        <div className="grid justify-center px-8 py-4 gap-6">
          <p className="text-center font-semibold text-lg">Campaign Run</p>
          <div className="font-layout-font overflow-auto no-scrollbar">
            <table className=" w-full xl:h-fit h-[703px]  dark:text-white whitespace-nowrap">
              <thead>
                <tr className=" font-semibold text-sm dark:bg-layout-dark bg-layout-light border-b-2 dark:border-overall_bg-dark border-overall_bg-light ">
                  <th className=" p-3.5 rounded-l-lg">S.no</th>
                  {[
                    "Campaign ID",
                    "Channel",
                    "Start Date",
                    "End Date",
                    "Budget",
                    "Leads",
                  ].map((heading) => (
                    <th key={heading} className="p-5">
                      <h1 className="flex items-center justify-center gap-1">
                        {heading}
                      </h1>
                    </th>
                  ))}
                  <th className="pr-2 rounded-r-lg">CPL</th>
                </tr>
              </thead>
              <tbody className="dark:bg-layout-dark bg-layout-light rounded-2xl dark:text-gray-200 text-gray-600   cursor-default">
                {campaignData.length > 0 ? (
                  campaignData.map((data, index) => (
                    <tr
                      className="border-b-2 dark:border-overall_bg-dark border-overall_bg-light text-center "
                      key={index}
                    >
                      <td className="rounded-l-lg ">
                        { index + 1}
                      </td>
                      <td>{data["Campaign ID"]}</td>
                      <td>{data["Channel"]}</td>
                      <td>{data["Start Date"]}</td>
                      <td>{data["End Date"]}</td>
                      <td>{data["Budget"]}</td>
                      <td>{data["Leads"]}</td>
                      <td className="pl-4 p-2.5 rounded-r-lg">{data["CPL"]}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center py-10 text-gray-500"
                    >
                      No matching results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignRun;
