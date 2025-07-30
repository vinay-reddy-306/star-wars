import { Routes, Route } from "react-router-dom";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="container-layout"><MovieListPage /></div>} />
      <Route path="/movie/:id" element={<div className="container-layout"><MovieDetailPage /></div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
