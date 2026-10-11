import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const FlavorTitle = () => {
    useGSAP(() => {
        const firstTextSplit = SplitText.create(".first-text-split h1", { type: "chars" });
        const secondTextSplit = SplitText.create(".second-text-split h1", { type: "chars" });

        gsap.from(firstTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: { trigger: ".flavor-section", start: "top 40%" },
        });

        gsap.to(".flavor-text-scroll", {
            duration: 1,
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            scrollTrigger: { trigger: ".flavor-section", start: "top 20%" },
        });

        gsap.from(secondTextSplit.chars, {
            yPercent: -200,
            stagger: 0.02,
            ease: "power1.inOut",
            scrollTrigger: { trigger: ".flavor-section", start: "top 10%" },
        });

        return () => {
            firstTextSplit.revert();
            secondTextSplit.revert();
        };
    }, []);

    return (
        <div className="general-title col-center justify-center h-full gap-4 sm:gap-8 md:gap-14 2xl:gap-24 w-full text-center">
            <div className="overflow-hidden py-1 sm:py-2 first-text-split">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-black">Dez Anos</h1>
            </div>
            <div style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }} className="flavor-text-scroll">
                <div className="bg-purple py-1 px-3 sm:py-2 sm:px-4 2xl:px-6">
                    <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">depois</h2>
                </div>
            </div>
            <div className="overflow-hidden py-1 sm:py-2 second-text-split">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-black">e ainda só o começo</h1>
            </div>
        </div>
    );
};

export default FlavorTitle;
