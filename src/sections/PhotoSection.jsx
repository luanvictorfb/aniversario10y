// PhotoSection.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const PhotoSection = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(
        () => {
            const track = trackRef.current;
            if (!track) return;

            const getScrollDistance = () => {
                return track.scrollWidth - window.innerWidth;
            };

            gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${getScrollDistance()}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        },
        { scope: sectionRef },
    );

    return (
        <section ref={sectionRef} className="flavor-section min-h-dvh h-dvh overflow-hidden relative">
            <div
                ref={trackRef}
                className="flavor-track h-full flex flex-row items-center relative flex-nowrap will-change-transform pl-4 sm:pl-10 lg:pl-20 pr-12 sm:pr-20 lg:pr-32"
            >
                <div className="flex-none flex items-center justify-center w-[88vw] sm:w-[65vw] lg:w-[45vw] xl:w-[40vw] h-full mr-6 sm:mr-12 lg:mr-20">
                    <FlavorTitle />
                </div>
                <div className="h-full flex items-center">
                    <FlavorSlider />
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;