import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return { data, loading };
};

export default useFetch;
