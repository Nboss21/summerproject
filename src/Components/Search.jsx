import React, { useState } from 'react'

function Search({searchTerm,setSearchTerm}) {
   
  return (
    <div className="flex justify-center my-9  ">
      <div className=' flex'>
        <img src="/src/assets/images/Search.svg" alt="" className='mx-4'/>
        <input
          type="text"
          placeholder="search "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-white"
        />
      </div>
    </div>
  );
}

export default Search