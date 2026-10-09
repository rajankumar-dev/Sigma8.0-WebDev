"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchUserData = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
  //     );
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  const { data, error, isLoading } = useQuery({
    queryKey: ["user-data"],
    queryFn: () =>
      fetch(
        "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10",
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{erroe}</div>;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
