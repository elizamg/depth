import baseCanvas from "../assets/baseImage.png"
import zoomedCanvas from "../assets/zoomedOut.jpeg"
import guyOne from "../assets/guy1.png"
import guyTwo from "../assets/guy2.png"

import { useState } from "react"

type DepthKnobs = {
  size: boolean;
  distance: boolean;
  color: boolean;
  shadow: boolean;
  vanishingPoint: boolean;
  overlap: boolean;
}



export default function MainPage() {
  const [knobs, setKnobs] = useState<DepthKnobs>({
    size: false,
    distance: false,
    color: false,
    shadow: false,
    vanishingPoint: false,
    overlap: false,
  });

  function toggleKnob (key: keyof DepthKnobs) {
    setKnobs(prev => ({
      ...prev,
      [key] : !prev[key],
    }));
  }
  console.log(knobs);

  /*figure out the render content*/

  const canvas = knobs.vanishingPoint ? zoomedCanvas : baseCanvas;


  return (
    <main 
      className="min-h-screen w-full bg-slate-800" 
    >
      <div className="max-w-5xl mx-auto py-8 flex-col gap-8">
        {/* toggles row */}
        <div className="flex flex-row gap-6 justify-center text-white">
          <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm text-white">Size</span>
            <button
            onClick={() => toggleKnob("size")}
            >
              <div 
                className={
                  "w-12 h-7 rounded-full flex items-center px-1 transition-colors " + 
                  (knobs.size ? "bg-emerald-500" : "bg-slate-600")
                }

              >
                <div    
                className={
                  "w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 " + 
                  (knobs.size ? "translate-x-5" : "translate-x-0")
                }
              >
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm text-white">Distance</span>
            <button
            onClick={() => toggleKnob("distance")}
            >
              <div 
                className={
                  "w-12 h-7 rounded-full flex items-center px-1 transition-colors " + 
                  (knobs.distance ? "bg-emerald-500" : "bg-slate-600")
                }

              >
                <div    
                className={
                  "w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 " + 
                  (knobs.distance ? "translate-x-5" : "translate-x-0")
                }
              >
                </div>
              </div>
            </button>
          </div>
                    <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm text-white">Color</span>
            <button
            onClick={() => toggleKnob("color")}
            >
              <div 
                className={
                  "w-12 h-7 rounded-full flex items-center px-1 transition-colors " + 
                  (knobs.color ? "bg-emerald-500" : "bg-slate-600")
                }

              >
                <div    
                className={
                  "w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 " + 
                  (knobs.color ? "translate-x-5" : "translate-x-0")
                }
              >
                </div>
              </div>
            </button>
          </div>
                    <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm text-white">Shadow</span>
            <button
            onClick={() => toggleKnob("shadow")}
            >
              <div 
                className={
                  "w-12 h-7 rounded-full flex items-center px-1 transition-colors " + 
                  (knobs.shadow ? "bg-emerald-500" : "bg-slate-600")
                }

              >
                <div    
                className={
                  "w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 " + 
                  (knobs.shadow ? "translate-x-5" : "translate-x-0")
                }
              >
                </div>
              </div>
            </button>
          </div>
                    <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm text-white">Vanishing Point</span>
            <button
            onClick={() => toggleKnob("vanishingPoint")}
            >
              <div 
                className={
                  "w-12 h-7 rounded-full flex items-center px-1 transition-colors " + 
                  (knobs.vanishingPoint ? "bg-emerald-500" : "bg-slate-600")
                }

              >
                <div    
                className={
                  "w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 " + 
                  (knobs.vanishingPoint ? "translate-x-5" : "translate-x-0")
                }
              >
                </div>
              </div>
            </button>
          </div>
                    <div className="flex flex-col items-center gap-1 text-white">
            <span className="text-sm text-white">Overlap</span>
            <button
            onClick={() => toggleKnob("overlap")}
            >
              <div 
                className={
                  "w-12 h-7 rounded-full flex items-center px-1 transition-colors " + 
                  (knobs.overlap ? "bg-emerald-500" : "bg-slate-600")
                }

              >
                <div    
                className={
                  "w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 " + 
                  (knobs.overlap ? "translate-x-5" : "translate-x-0")
                }
              >
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* canvas */}
        <div className="relative p-6 min-h-[300px]">
            <img src ={canvas} className="w-full h-auto"/>
            <img
              src={guyOne}
              className="
                absolute 
                bottom-10 
                left-1/3 
                -translate-x-7
                h-75
                w-auto 
                z-20
              "
            />
            <img
              src={guyTwo}
              className="
                absolute 
                bottom-10 
                left-1/3 
                translate-x-40
                h-75
                w-auto 
                z-20
              "
            />

        </div>
      </div>

    </main>

  );
}
