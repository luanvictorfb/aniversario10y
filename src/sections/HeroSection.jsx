import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

function HeroSection() {
    // Split text into characters

    useGSAP(() => {
        const chars = SplitText.create(".text", { type: "chars" });

        gsap.from(chars.chars, {
            opacity: 0,
            yPercent: 30,
            duration: 0.5,
            stagger: 0.03,
            ease: "back.out(1.7)",
        });

        gsap.to(".image", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: ".image",
        });
    });

    return (
        <div className="relative bg-main-bg w-screen h-dvh overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col items-center translate-y-10 pt-24">
                <h1 className="text text-9xl text-pastel ">10 anos te amando</h1>
            </div>
            <img
                src="images/copa.png"
                className="image absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-75 "
            />
        </div>
    );
}

export default HeroSection;
