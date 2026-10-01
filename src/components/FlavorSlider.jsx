import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const memories = [
    { image: "images/memoria-1.jpeg", caption: "O primeiro encontro" },
    { image: "images/memoria-2.jpeg", caption: "A primeira viagem" },
    { image: "images/memoria-3.jpeg", caption: "O primeiro 'eu te amo'" },
    { image: "images/memoria-4.jpeg", caption: "Aquele show inesquecível" },
    { image: "images/memoria-4.mp4", caption: "Nosso cantinho" },
    { image: "images/memoria-6.jpeg", caption: "Hoje, 10 anos depois" },
];

const FlavorSlider = () => {
    const sliderRef = useRef();

    useGSAP(() => {
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmount + 1500}px`,
                scrub: true,
                pin: true,
            },
        }).to(".flavor-track", {
            x: `-${scrollAmount + 1500}px`,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
                {memories.map((memory, index) => {
                    const isVideo = memory.image.endsWith(".mp4");

                    return (
                        <div
                            key={memory.caption}
                            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${
                                index % 2 === 0 ? "rotate-2" : "-rotate-2"
                            }`}
                        >
                            {isVideo ? (
                                <video
                                    src={memory.image}
                                    className="w-full h-full object-cover rounded-3xl border-[.6vw] border-white shadow-2xl"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={memory.image}
                                    alt={memory.caption}
                                    className="w-full h-full object-cover rounded-3xl border-[.6vw] border-white shadow-2xl"
                                />
                            )}
                            <h1>{memory.caption}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FlavorSlider;
