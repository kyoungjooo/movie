import { useParams } from "react-router-dom";
import useInfinity from "../hooks/useInfinity";
import { useEffect, useRef } from "react";

const MovieList = () => {
  const { id } = useParams();
  const lastMovieItemRef = useRef(null);
  const movieId = id || "popular";
  const { movieList, fetchNextPage, isLoading } = useInfinity({ key: movieId });
  useEffect(
    function onObserver() {
      const el = lastMovieItemRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !isLoading) {
            fetchNextPage();
          }
        },
        {
          rootMargin: "50px",
          threshold: 0.5,
        }
      );
      observer.observe(el);
      return () => {
        if (!el) return;
        observer.unobserve(el);
      };
    },
    [fetchNextPage, isLoading]
  );
  return (
    <>
      <div>{movieId}</div>
      <div></div>
      <div className="posterContainer">
        {movieList?.map((movie) => (
          <div key={movie.id}>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div>{movie.title}</div>
          </div>
        ))}
        <div ref={lastMovieItemRef}></div>
      </div>
    </>
  );
};
export default MovieList;
