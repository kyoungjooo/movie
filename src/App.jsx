import "./App.css";
import { Outlet, useNavigate } from "react-router";
import MovieList from "./pages/MOvieList";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/now_playing")}>상영작</button>
      <button onClick={() => navigate("/upcoming")}>개봉작</button>
      <button onClick={() => navigate("/top_rated")}>영화 랭크</button>
      <Outlet />
    </>
  );
}

export default App;
