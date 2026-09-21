import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";

function App() {
  useEffect(() => {
    gsap.to("#box-yellow", {
      y: 50,
      borderRadius: "100%",
      repeat: -1,
      duration: 2,
      yoyo: true,
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-800">
      <div
        id="box-yellow"
        className="h-32 w-32 bg-yellow-400 rounded-4xlxl"
      ></div>
    </div>
  );
}

export default App;
