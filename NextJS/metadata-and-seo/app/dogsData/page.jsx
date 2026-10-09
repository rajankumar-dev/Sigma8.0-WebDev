'use client'
import React, { useEffect, useState } from "react";

const DogsData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDogsData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/dogs?page=1&limit=10&query=Affenpinscher",
      ).then((res) => res.json());
      setData(res);
      setIsLoading(false)
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getDogsData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default DogsData;
