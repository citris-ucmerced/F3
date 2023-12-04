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


const displayWithParagraphs = (text) => {
  return text.split('\n').map((paragraph, index) => (
    <p key={index} className="paragraph">{paragraph}</p>
  ));
};


export default displayWithParagraphs;


const getRowById = (file, id, setData) => {
  let stopParsing = false;

  Papa.parse(file, {
    ...config,
    step: (results) => {
      const row = results.data;
      if (row.id === id) {
        setData(row);
        stopParsing = true;
      }

      if (stopParsing) {
        return;
      }
    },
  });

  return () => {
    stopParsing = true;
  };
};

const getRowByTitle = (file, slug, setData) => {
  let stopParsing = false;

  const toSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/['":,.]/g, '')  
      .replace(/ /g, '-')       
      .replace(/[^\w-]+/g, ''); 
  };

  Papa.parse(file, {
    ...config,
    step: (results) => {
      const row = results.data;
      if (row.title && toSlug(row.title) === slug) {
        setData(row);
        stopParsing = true;
      }

      if (stopParsing) {
        return;
      }
    },
  });

  return () => {
    stopParsing = true;
  };
};

const readCSVSortedByColumn = (file, category, setData) => {
  const data = {
    keys: [],
    dataByCategory: {},
  };

  Papa.parse(file, {
    ...config,
    step: (results) => {
      const key = results.data[category];
      const value = results.data;
      if (!data.keys.includes(key)) {
        data.keys.push(key);
        data.dataByCategory[key] = [];
      }
      data.dataByCategory[key].push(value);
    },
    complete: () => {
      setData(data);
    },
  });
};



export { readCSV, readCSVSortedByColumn, getRowById, getRowByTitle };
