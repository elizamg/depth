import homeImage from "../assets/mountain-range-9842371_1280.webp"
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main 
      className="min-h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="min-h-screen flex items-center justify-center ">
        <div>
          <h1 className = "text-5xl font-bold text-white mb-4">
            depth manipulator
          </h1>
          <h2 className = "text-3xl font-semibold text-white mb-4 justify-center">
            a journey through depth cues
          </h2>
          <Link to="/MainPage">
            <button className = "px-4 py-2 border border-white text-white rounded-full hover:opacity-50 justify-center">
              enter here
            </button>
          </Link>
        </div>
      </div>

    </main>

  );
}
