import React from "react";
import { useSelector } from "react-redux";
import { generateCSV } from "../utils/csvgenerator";
import { downloadCSV } from "../utils/downloadcsv";

const DownloadCsv = () => {
  const data = useSelector((state) => state.expense.movie);
  console.log(data);

  const handleDownload = () => {
    const csvData = generateCSV(data);
    downloadCSV(csvData);
  };

  return (
    <div>
      <button
        className="bg-pink-200  rounded-lg p-2 m-2"
        onClick={handleDownload}
      >
        Download CSV
      </button>
    </div>
  );
};

export default DownloadCsv;
