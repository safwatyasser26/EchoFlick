import React from "react";
import Image from "next/image";
const Info = ({ item }) => {
  return (
    <div className="w-full h-1/3 flex border mt-8">
      <Image
        src={`https://image.tmdb.org/t/p/original${
          item?.poster_path || item?.profile_path
        }`}
        alt={item?.title || item?.name}
        width={500}
        height={500}
        className="w-1/4"
      />
      <div className="ml-8">
        <h1 className="text-4xl font-extrabold">{item?.title || item?.name}</h1>
        <p>{item?.release_date || item?.first_air_date}</p>  
      </div>
    </div>
  );
};

export default Info;
