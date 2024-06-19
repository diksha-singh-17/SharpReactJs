export const downloadCSV = (csvData, filename = "data.csv") => {
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  a.click();
  window.URL.revokeObjectURL(url);
};
