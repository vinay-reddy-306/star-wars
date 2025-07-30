import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/moviesSlice";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import SortableHeader from "../components/SortableHeader";
import "../styles/App.css";

const MovieListPage = () => {
  const dispatch = useDispatch();
  const { items: movies, status, error } = useSelector((state) => state.movies);
  const [sortKey, setSortKey] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (status === "idle") dispatch(fetchMovies());
  }, [dispatch, status]);

  const getSortValue = (movie, key) => {
    if (key === "release_date") return new Date(movie[key]).getTime();
    return movie[key]?.toString().toLowerCase();
  };

  const sortedMovies = [...movies].sort((a, b) => {
    const aVal = getSortValue(a, sortKey);
    const bVal = getSortValue(b, sortKey);
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  if (status === "loading") return <Loader />;
  if (status === "failed") return <ErrorMessage message={error} />;

  return (
    <div className="container" tabIndex={-1}>
      <h1>Star Wars Movies</h1>
      <table>
        <thead>
          <tr>
            <SortableHeader
              label="Title"
              headerKey="title"
              sortKey={sortKey}
              sortOrder={sortOrder}
              setSortKey={setSortKey}
              setSortOrder={setSortOrder}
            />
            <SortableHeader
              label="Release Date"
              headerKey="release_date"
              sortKey={sortKey}
              sortOrder={sortOrder}
              setSortKey={setSortKey}
              setSortOrder={setSortOrder}
            />
            <th>Director</th>
            <th>Producer</th>
            <th>Episode</th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie) => (
            <tr key={movie.episode_id}>
              <td><Link to={`/movie/${movie.episode_id}`}>{movie.title}</Link></td>
              <td>{movie.release_date}</td>
              <td>{movie.director}</td>
              <td>{movie.producer}</td>
              <td>{movie.episode_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieListPage;
