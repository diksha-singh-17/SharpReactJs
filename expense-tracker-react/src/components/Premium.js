import React from "react";
import ToggleTheme from "./ToggleTheme";
import DownloadCsv from "./DownloadCsv";

const Premium = () => {
  return (
    <div className="flex justify-center">
      <ToggleTheme />
      <DownloadCsv />
    </div>
  );
};

export default Premium;
