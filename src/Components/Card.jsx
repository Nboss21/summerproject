import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  movie: { title, vote_average, poster_path, release_date, original_language ,id},
}) => {
  return (
   
      <div className="bg-gray-800  max-w-[200px] rounded-2xl shadow-md  p-2 hover:scale-105 transition-transform duration-300">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/images/No-poster.png"
          }
          alt={title}
          className=" object-cover w-full h-72 rounded-md"
        />
        <div className="mt-3 text-white">
          <h3 className="text-1xl textbase font-semibold leading-tight truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-blue-400 text-xs mt-1">
            <img
              src="/images/Star.svg"
              alt="rating"
              className="w-4 h-4"
            />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            <span className="text-gray-500">•</span>
            <p>{release_date ? release_date.split("-")[0] : "N/A"}</p>
          </div>
        </div>
        <div></div>
      </div>
   
  );
};

export default Card;
