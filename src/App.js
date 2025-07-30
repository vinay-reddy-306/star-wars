import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="container-layout"><MovieListPage /></div>} />
      <Route path="/movie/:id" element={<div className="container-layout"><MovieDetailPage /></div>} />
    </Routes>
  );
}

export default App;
