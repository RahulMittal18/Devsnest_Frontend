import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  let fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((val) => {
        // console.log('val',val);
        setData(val);
      });
  };
  // console.log('after',data);

  useEffect(() => {
    fetchData();
  }, [url]);
  // console.log(data);
  return [data];
};

export default useFetch;
