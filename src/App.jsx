import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import FootSection from "./sections/FootSection";
import HeroSection from "./sections/HeroSection";
import PhotoSection from "./sections/PhotoSection";
import TextSection from "./sections/TextSection";

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText, ScrollSmoother);

function App() {
    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        });

        return () => smoother.kill();
    }, []);

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main>
                    <HeroSection />
                    <TextSection />
                    <PhotoSection />
                    <FootSection />
                </main>
            </div>
        </div>
    );
}

export default App;
