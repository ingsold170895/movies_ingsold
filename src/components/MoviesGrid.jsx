import { useEffect, useMemo, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient.js";
import { Spinner } from "./Sppiner";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  let query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    console.log(search);
    const searchUrl = search
      ? "search/movie?query=" + search
      : "discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <InfiniteScroll dataLength={movies.length} hasMore={true}
    next={() => }>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
