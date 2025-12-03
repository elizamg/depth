import homeImage from "../assets/background.jpg"
import { Link } from "react-router-dom";

export default function Information() {
  return (
    <main 
      className="min-h-screen w-full bg-cover bg-center" 
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black/40 p-8 rounded-xl text-center max-w-xl">

        <div>
          <h1 className = "text-5xl font-bold text-white mb-4">
            about the depth manipulator
          </h1>
          <h2 className = "text-l font-semibold text-white mb-4 justify-center">
            This project combines Renaissance art with the concept of depth cues—both discovered during the Renaissance and adapted from earlier artistic traditions. On this website, you can manipulate elements of The Delivery of the Keys by Pietro Perugino (c. 1481–1482). Specifically, you can adjust the distance of the vanishing point, the size of the figures, their vertical positioning, atmospheric coloring, horizontal positioning (overlap), and the shadows.
          </h2>
          <Link to="/MainPage">
            <button className = "px-4 py-2 border border-white text-white rounded-full hover:opacity-50 justify-center">
              enter here
            </button>
          </Link>
        </div>
      </div>
      </div>

    </main>

  );
}
