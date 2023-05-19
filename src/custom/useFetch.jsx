import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  // state declaration
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // function for fetching data from api
    const fetchData = async () => {
      try {
        let res = await fetch(url);
        res = await res.json();
        setIsLoading(false);
        setData(res);
        return res;
      } catch (error) {
        setData({
          msg: error,
        });
        setIsError(true);
        setIsLoading(false);
        return error;
      }
    };
    // invoke the function
    fetchData();
  }, [url]);
  // returning the state
  return { data, isError, isLoading };
};

export default useFetch;
