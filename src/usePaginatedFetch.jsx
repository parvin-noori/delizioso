import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";

export default function usePaginatedFetch(url, pageSize) {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(url);
    const data = response.data;

    const paginatedData = _.chunk(data, pageSize);
    // console.log(paginatedData);

    setData(paginatedData);
    setloading(false);
  };

  useEffect(() => {
    getData();
  }, [url, pageSize]);

  return [loading, data];
}
