import React, { useState,useEffect } from 'react'
import Card from './Card';
import Search from './Search';
import {useDebounce } from 'react-use'
import { updateSearchCount } from '../appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`

  }

};


function Home() {
  const[searchTerm,setSearchTerm]=useState('');
 const [movieList,setMovieList]=useState([]);
 const [isLoading,setIsLoading]=useState(false)
 const [errorMessage,setErrorMessage]=useState('')
 const [debouncedSearchTerm,setDebouncedSeachTerm]=useState()

 useDebounce(()=>setDebouncedSeachTerm(searchTerm), 500 ,[searchTerm])
  const fetchMovies = async (query='') => {
 setIsLoading(true);
 setErrorMessage('');
    try{
     const endpoint = query
       ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
       : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
     const response= await fetch(endpoint, API_OPTIONS);
     
if(!response.ok){

  throw new Error('Failed to fetch data of movies')
}

const data=await response.json();
console.log(data);
if(data.response =='False'){
  setErrorMessage(data.Error|| 'Failed to fetch movies');
setMovieList([]);
return;

}


setMovieList(data.results || []);
if(query && data.results.length>0){

  await updateSearchCount(query,data.results[0]);
}
    }catch(error){
      console.error(`Error fetching data ${error}`);
      setErrorMessage('Error man.');
    } finally{

     setIsLoading(false);
  }
  };
  
  useEffect(
    ()=>{
fetchMovies(debouncedSearchTerm)
    },[debouncedSearchTerm]
  );
  return (
    <section className="bg-[url('/src/assets/images/BG.png')] min-h-screen p-10 ">
      <div className="mx-11 flex justify-center ">
        <img src="/src/assets/images/logo.png" alt="" />
      </div>
      <div className="mx-11 flex justify-center">
        <img src="/src/assets/images/hero-img.png" alt="" />
      </div>
      <div className="mx-11 justify-center text-center">
        <h1 className=" text-3xl text-amber-50 ">
          Find <span className="text-purple-700 ">Movies </span> You'll Love
          Without the Hassle
        </h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white  text-3xl">{searchTerm}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-white text-2xl">Trending</h1>
        <div></div>
      </div>

      <div className=" max-w-7xl mx-auto px-4 grid-cols-5 justify-center ">
        <h1 className="text-2xl my-3 text-white ">Popular</h1>
      </div>

      {isLoading ? (
        <p className="text-white">Loading.....</p>
      ) : errorMessage ? (
        <p className="text-red-500">${errorMessage}</p>
      ) : (
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 place-items-center">
            {movieList.map((movie, index) => (
              <Card key={index} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Home