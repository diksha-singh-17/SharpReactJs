export const generateCSV = (data) => {
  const csvRows = [];

  // Add headers
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(","));

  // Add rows
  data.forEach((row) => {
    const values = headers.map((header) => {
      const escaped = ("" + row[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  });

  return csvRows.join("\n");
};
