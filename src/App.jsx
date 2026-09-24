import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import HeroSection from "./sections/HeroSection";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, ScrollSmoother);

function App() {
    return (
        <main>
            <HeroSection />
        </main>
    );
}

export default App;
