import { useEffect, useMemo, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient.js";
import { Spinner } from "./Sppiner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  let query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "search/movie?query=" + search + "&page=" + page
      : "discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies(prevMovies => prevMovies.concat(data.results));
      setHasMore(data.page < data.totalPages);
      setIsLoading(false);
      console.log(page);
    });
  }, [search, page]);

  

  return (
    <InfiniteScroll 
    dataLength={movies.length} 
    hasMore={hasMore}
    next={() => setPage((prevPage) => prevPage + 1)}
    loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
