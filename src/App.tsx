import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

function AboutPage() {
  return (
    <main style={{ padding: "1.5rem" }}>
      <h1>About</h1>
      <p>Explain what your app does here.</p>
    </main>
  );
}

function App() {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
