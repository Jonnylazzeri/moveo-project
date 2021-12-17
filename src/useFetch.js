import React, { useEffect, useState } from 'react';

const url = 'https://randomuser.me/api/?results=100&seed=foobar';
export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const userData = await res.json();
    setData(Array.from(userData.results));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};
