import React, { useEffect, useState } from "react";

const Testing = () => {
  const [Loading, setLoading] = true;
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const apiHandler = async () => {
    const apiData = await fetch(url);
    const response = await apiData.json();
    setData(response);
  };

  useEffect(() => {
    apiHandler();
  }, []);

  console.log(data, "data");

  return <div>Testing</div>;
};

export default Testing;
