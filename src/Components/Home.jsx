import React, { useState,useEffect } from 'react'
import Card from './Card';
import Search from './Search';
import {useDebounce } from 'react-use'
import {  updateSearchCount } from '../appwrite';
import { Link } from 'react-router-dom';

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
 const [debouncedSearchTerm,setDebouncedSeachTerm]=useState();
 const [movieDetails,setMovieDetails]=useState()
//  const [trendingMovies,setTrendingMovies] = useState([])
 useDebounce(()=>setDebouncedSeachTerm(searchTerm), 500 ,[searchTerm])
 const movieDetail= async()=>{


 }
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
  const loadTrendingMovies =async ()=>{
   try{
const movies=await getTrendingMovies();
setTrendingMovies( movies);
   }catch(error){
    console.error(`error trending: ${error}`)
   }



  }
  useEffect(
    ()=>{
fetchMovies(debouncedSearchTerm)
    },[debouncedSearchTerm]
  );
  // useEffect(()=>(
  //    loadTrendingMovies()
  // ))
  return (
    <div className="bg-[url('/images/BG.png')] min-h-screen p-8">
      <section className="">
        <div className="mx-11 flex justify-center ">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="mx-11 flex justify-center">
          <img src="/images/hero-img.png" alt="" />
        </div>
        <div className="mx-11 justify-center ">
          <h1 className=" text-3xl text-amber-50 text-center ">
            Find <span className="text-purple-700 ">Movies </span> You'll Love
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </section>
      <section className="  justify-between">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-2xl">Trending</h1>
        </div>

        <div className="  max-w-7xl mx-auto justify-center ">
          <h1 className="text-2xl my-3 text-white ">Popular</h1>
        </div>

        {isLoading ? (
          <p className="text-white">Loading.....</p>
        ) : errorMessage ? (
          <p className="text-red-500">${errorMessage}</p>
        ) : (
          <div className="">
            <Link to='/Details' >
              <div
                className="max-w-7xl mx-auto grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 "
                onClick={() => {}}
              >
                {movieList.map((movie, index) => (
                  <Card key={index} movie={movie} />
                ))}
              </div>
            </Link>
            ;
          </div>
        )}
      </section>
    </div>
  );
}

export default Home