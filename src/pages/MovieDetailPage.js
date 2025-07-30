import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovies } from "../store/moviesSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "../styles/App.css";

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  const movie = movies.find((m) => m.episode_id.toString() === id);

  if (status === "loading") return <Loader />;
  if (status === "failed") return <ErrorMessage message={error} />;
  if (!movie) return <ErrorMessage message="Movie not found." />;

  return (
    <div className="container" tabIndex={-1}>
      <button onClick={() => navigate(-1)}>&larr; Back</button>
      <h1>{movie.title}</h1>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Producer:</strong> {movie.producer}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Opening Crawl:</strong></p>
      <p>{movie.opening_crawl}</p>
    </div>
  );
};

export default MovieDetailPage;
