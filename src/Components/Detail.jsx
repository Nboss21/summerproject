import React, { useEffect, useState } from 'react'
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function Details() {
   const [movieLists,setMovieLists]=useState([]);

const fetchDetails=async()=>{
    
     const endpoint =' https://api.themoviedb.org/3/discover/movie'
     const response= await fetch(endpoint, API_OPTIONS);
    
if (!response.ok) {
  throw new Error("Failed to fetch data of movies");
}

const data = await response.json();
console.log(data);
if (data.response == "False") {
  setErrorMessage(data.Error || "Failed to fetch movies");
  setMovieList([]);
  return;
}

setMovieLists(data.results || []);

  }
  useEffect(()=>{
fetchDetails()
  },[])
  return (
    <div className="bg-[#030014] min-h-screen p-7">
      {/* {movieLists.map((movie)=>(
  <h1>{movie.id}</h1>
))} */}

      <section className="justify-center grid bg-[#0F0D23] mx-40 rounded-2xl p-4">
        <div className=''>
          <div>
            <h1 className="font-bold text-white text-2xl">Squid Game 2</h1>
            <p className="text-white gap-2 my-2">
              2024 <span>~</span> PG-13<span>~</span> 2h46m
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="/images/image (18).png" alt="" />
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/Ed1sGgHUo88?si=7Rdivs1Gvh7ruaKd"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>
      <section className=" my-9">
        <div className="flex justify-evenly">
          <h1 className="text-[#A8B5DB]">Generes</h1>
          <h2 className="bg-[#221F3D] w-117px text-white p-1">Adventure</h2>
          <h2>Action</h2>
          <h2>Drama</h2>
          <div className="gap-8">
            <a href="/" className=" bg-purple-600 p-2 rounded-2xl text-white">
              Visit Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details