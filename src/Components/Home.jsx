import React from 'react'
import Card from './Card';

function Home() {
  return (
    <section className="bg-[url('/src/assets/images/BG.png')] h-auto">
      <div className="flex justify-center">
        <img src="/src/assets/images/logo.png" alt="" />
      </div>
      <div className="flex justify-center">
        <img src="/src/assets/images/hero-img.png" alt="" />
      </div>
      <div className="justify-center text-center">
        <h1 className="text-3xl text-amber-50 ">
          Find <span className="text-purple-700 ">Movies </span> You'll Love
          Without the Hassle
        </h1>
      </div>

      <label htmlFor="seacrch">Search</label>

      <div className="grid-cols-4">
        <Card />
      </div>
    </section>
  );
}

export default Home