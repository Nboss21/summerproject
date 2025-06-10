

function Card() {
    const movies = [
      {
        name: "Antman & The Wasp Quantumania",
        rating: "4.6",
        image: "/src/assets/Image (13).png",
        genre: "Action",
      },
      {
        name: "Air; Courting A Legend",
        rating: "4.6",
        image: "/src/assets/Image (3).png",
        genre: "Action",
      },
      {
        name: "John Wick: Chapter 4",
        rating: "4.6",
        image: "/src/assets/Image (4).png",
        genre: "Action",
      },
      {
        name: "Wednesday Season 1",
        rating: "4.6",
        image: "/src/assets/Image (4).png",
        genre: "Action",
      },
      {
        name: "Beef Series",
        rating: "4.6",
        image: "/src/assets/Image (5).png",
        genre: "Action",
      },
      {
        name: "Valhalla Murders Series",
        rating: "4.6",
        image: "/src/assets/Image (6).png",
        genre: "Action",
      },
      {
        name: "Toxic",
        rating: "4.6",
        image: "/src/assets/Image (7).png",
        genre: "Action",
      },
      {
        name: "Insider",
        rating: "4.6",
        image: "/src/assets/Image (8).png",
        genre: "Action",
      },
      {
        name: "Race Season 1",
        rating: "4.6",
        image: "/src/assets/Image (10).png",
        genre: "Action",
      },
    ];
  return (
    <>
      {movies.map((movies, index) => (
        <div key={index} className="bg-[#1a1a2e] rounded-xl max-w-max object-cover p-2 shadow-md">
          <img
            src={movies.image}
            alt={movies.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <div className="mt-3 text-white">
            <h3 className="text-md font-semibold leading-tight">
              {movies.name}
            </h3>
            <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
              
              <span>{movies.rating}</span>
              <span className="text-gray-400">•</span>
              <span>{movies.genre}</span>
              <span className="text-gray-400">•</span>
              <span>Movie</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
