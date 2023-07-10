import styles from "./App.module.css";

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        {/* 2️⃣ Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer>©️ Ingsold - 2023</footer>
    </>
  );
}
