import axios from "axios";
import { useEffect, useState } from "react";

export const useData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(url);

    setData((prev) => response.data);
  };

  return { data };
};
