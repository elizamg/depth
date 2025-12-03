
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage"
import Information from "./pages/Information";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Information" element={<Information />} />
    </Routes>
  );
}

export default App;
