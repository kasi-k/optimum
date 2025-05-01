import React, { useEffect, useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";
import { Pencil } from "lucide-react";
import { TbFileExport } from "react-icons/tb";
import Pagination from "../../../component/Pagination";
import Filter from "../../../component/Filter";
import { useSearch } from "../../../component/SearchBar";
import { AppointmentData } from "../../../component/Data";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import Calendar from "./Calendar";
import { CiCalendar } from "react-icons/ci";

const EditAppointmentModal = ({ onClose, appointmentData, onSave }) => {
  const [formData, setFormData] = useState(appointmentData);
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50 z-50">
      <div className="bg-layout-light dark:bg-layout-dark p-8 rounded-lg w-[450px] shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-center dark:text-white">
          Edit Appointment
        </h2>

        <div className="space-y-4">
          {["tokenNo", "name", "phoneNumber", "date", "slot", "status"].map(
            (field) => (
              <div key={field} className="flex flex-col gap-1">
                <label className="text-sm dark:text-gray-300 capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  className="border rounded-md p-2 dark:bg-[#1F1F1F] dark:border-gray-700 dark:text-white"
                />
              </div>
            )
          )}
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            className="px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const Appointment_Tab = () => {
  const { searchTerm } = useSearch();
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const[viewCalendar,setViewCalendar] = useState(false)

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(AppointmentData);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    const filtered = AppointmentData.filter((item) =>
      Object.values(item).some((value) => {
        const lowerValue = value.toString().toLowerCase();
        return (
          lowerValue === lowerSearchTerm ||
          (!isNaN(searchTerm) && lowerValue.includes(searchTerm)) ||
          lowerValue.startsWith(lowerSearchTerm)
        );
      })
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setEditModalOpen(true);
  };

  const handleSave = (updatedData) => {
    const updatedList = filteredData.map((item) =>
      item.tokenNo === updatedData.tokenNo ? updatedData : item
    );
    setFilteredData(updatedList);
    setEditModalOpen(false);
  };

  return (
    <>
       {!viewCalendar && (
    <div>
 
      <div className="relative">
        <div className="font-layout-font absolute -top-13 right-0 flex justify-end items-center gap-2 pb-2">
          <p
            onClick={() => setCreateCampaign(true)}
            className="cursor-pointer flex items-center dark:text-white gap-2 bg-select_layout-dark px-4 py-2 text-sm rounded-md"
          >
            <TbBrandCampaignmonitor size={18} />
            Create Appointments
          </p>
          <p onClick={ () =>setViewCalendar(true)} className="cursor-pointer flex items-center gap-1.5 dark:text-white dark:bg-layout-dark bg-layout-light px-4 py-2 rounded-md">
          <CiCalendar  size={18} className="stroke-1" />Calendar
          </p>
          <p className="cursor-pointer flex items-center gap-1.5 dark:text-white dark:bg-layout-dark bg-layout-light px-4 py-2 rounded-md">
            <TbFileExport />
            Export
          </p>
          <Filter />
        </div>
      </div>

      <div className="font-layout-font overflow-auto no-scrollbar">
        <table className="w-full xl:h-fit h-[703px] dark:text-white whitespace-nowrap">
          <thead>
            <tr className="font-semibold text-sm dark:bg-layout-dark bg-layout-light border-b-2 dark:border-overall_bg-dark border-overall_bg-light">
              <th className="p-3.5 rounded-l-lg">S.no</th>
              {[
                "Token No",
                "Name",
                "Phone Number",
                "Date",
                "Slot",
                "Status",
              ].map((heading) => (
                <th key={heading} className="p-5">
                  <h1 className="flex items-center justify-center gap-1">
                    {heading} <HiArrowsUpDown className="dark:text-white" />
                  </h1>
                </th>
              ))}
              <th className="pr-2 rounded-r-lg">Action</th>
            </tr>
          </thead>

          <tbody className="dark:bg-layout-dark bg-layout-light rounded-2xl dark:text-gray-200 text-gray-600 cursor-default">
            {paginatedData.length > 0 ? (
              paginatedData.map((data, index) => (
                <tr
                  key={index}
                  className="border-b-2 dark:border-overall_bg-dark border-overall_bg-light text-center"
                >
                  <td className="rounded-l-lg">{startIndex + index + 1}</td>
                  <td>{data.tokenNo}</td>
                  <td>{data.name}</td>
                  <td>{data.phoneNumber}</td>
                  <td>{data.date}</td>
                  <td>{data.slot}</td>
                  <td>{data.status}</td>
                  <td className="space-x-2 p-2.5 rounded-r-lg">
                    <button
                      className="bg-blue-200 p-1.5 rounded-sm"
                      onClick={() => handleEdit(data)}
                    >
                      <Pencil size={16} className="text-blue-600" />
                    </button>
                    <button
                      className="bg-green-200 p-1.5 rounded-sm"
                      onClick={() => alert("View modal not implemented yet")}
                    >
                      <LuEye size={16} className="text-green-600" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No matching results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {editModalOpen && (
        <EditAppointmentModal
          onClose={() => setEditModalOpen(false)}
          appointmentData={selectedAppointment}
          onSave={handleSave}
        />
      )}
   
      </div>
       )}
      {viewCalendar && <Calendar/>}
  </>
  );
};

export default Appointment_Tab;
