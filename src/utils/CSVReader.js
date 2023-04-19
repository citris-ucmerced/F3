import Papa from "papaparse";

const config = {
  download: true,
  header: true,
  delimiter: ",",
  skipEmptyLines: true,
};

const readCSV = (file, setData) => {
  Papa.parse(file, {
    ...config,
    complete: (results) => {
      setData(results.data);
    },
  });
};

export default readCSV;
