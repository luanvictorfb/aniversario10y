import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

function HeroSection() {
    useGSAP(() => {
        const chars = SplitText.create(".hero-text", { type: "chars" });

        gsap.from(chars.chars, {
            opacity: 0,
            yPercent: 30,
            duration: 0.5,
            stagger: 0.03,
            ease: "back.out(1.7)",
        });

        gsap.to(".hero-image", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: ".hero-image",
        });

        return () => chars.revert();
    });

    return (
        <section className="relative bg-main-bg w-full min-h-dvh h-dvh overflow-hidden flex flex-col items-center">
            <div className="relative z-10 w-full flex flex-col items-center pt-12 sm:pt-16 md:pt-24 px-4">
                <h1 className="hero-text text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-pastel text-center font-bold tracking-tight max-w-full leading-tight drop-shadow-sm select-none">
                    10 anos te amando
                </h1>
            </div>
            <img
                src="images/copa.png"
                alt="Nós"
                className="hero-image absolute bottom-0 left-1/2 -translate-x-1/2 max-h-[52vh] sm:max-h-[62vh] md:max-h-[70vh] w-auto max-w-[94vw] md:max-w-none object-contain pointer-events-none select-none"
            />
        </section>
    );
}

export default HeroSection;
