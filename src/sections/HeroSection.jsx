import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

function HeroSection() {
    return (
        <div className="relative bg-main-bg w-screen h-dvh overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col items-center translate-y-10 pt-24">
                <h1 className="text-9xl text-pastel ">Feliz 10 anos amor</h1>
            </div>
            <img
                src="/images/copa.png"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 "
            />
        </div>
    );
}

export default HeroSection;
