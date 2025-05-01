import React, { useState, useEffect } from 'react';
import { TbFileExport } from 'react-icons/tb';
import { Filter } from 'lucide-react';
import { HiArrowsUpDown } from 'react-icons/hi2';
import Pagination from '../../component/Pagination';
import { useSearch } from '../../component/SearchBar';
import { campaigntData } from '../../component/Data';

const Campaign_Report = () => {
  const { searchTerm } = useSearch();
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(campaigntData);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = campaigntData.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(lowerSearchTerm)
      )
    );

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="relative">
        <div className="font-layout-font absolute -top-13 right-0 flex justify-end items-center gap-2 pb-2">
          <p className="cursor-pointer flex items-center gap-1.5 dark:text-white dark:bg-layout-dark bg-layout-light px-4 py-2 rounded-md">
            <TbFileExport />
            Export
          </p>
          <p className="cursor-pointer flex items-center gap-1.5 dark:text-white dark:bg-layout-dark bg-layout-light px-4 py-2 rounded-md">
            <Filter size={16} />
            Filter
          </p>
        </div>
      </div>

      <div className="font-layout-font overflow-auto no-scrollbar">
        <table className="w-full xl:h-fit h-[703px] dark:text-white whitespace-nowrap">
          <thead>
            <tr className="font-semibold text-sm dark:bg-layout-dark bg-layout-light border-b-2 dark:border-overall_bg-dark border-overall_bg-light">
              <th className="p-3.5 rounded-l-lg">S.no</th>
              {["Campaign ID", "Channel", "Start Date", "End Date", "Budget", "Leads", "CPL", "Link"].map((heading) => (
                <th key={heading} className="p-5 text-center">
                  <h1 className="flex items-center justify-center gap-1">
                    {heading} <HiArrowsUpDown className="dark:text-white" />
                  </h1>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="dark:bg-layout-dark bg-layout-light rounded-2xl dark:text-gray-200 text-gray-600 text-center">
            {paginatedData.length > 0 ? (
              paginatedData.map((data, index) => (
                <tr key={index} className="border-b-2 dark:border-overall_bg-dark border-overall_bg-light">
                  <td className="p-4">{startIndex + index + 1}</td>
                  <td>{data.campaignId}</td>
                  <td>{data.channel}</td>
                  <td>{data.startDate}</td>
                  <td>{data.endDate}</td>
                  <td>₹{data.budget}</td>
                  <td>{data.leads}</td>
                  <td>₹{data.cpl}</td>
                  <td><a href={data.link} className="text-blue-500 underline">Link</a></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-10 text-gray-500">
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
    </div>
  );
};

export default Campaign_Report;
