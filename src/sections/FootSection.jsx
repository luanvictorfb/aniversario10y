import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const FootSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            const split = SplitText.create(".foot-text", {
                type: "lines",
                linesClass: "foot-line",
            });

            split.lines.forEach(line => {
                gsap.fromTo(
                    line,
                    { opacity: 0, rotateX: -100, transformOrigin: "top center" },
                    {
                        opacity: 1,
                        rotateX: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: line,
                            start: "top 90%",
                            end: "top 50%",
                            scrub: true,
                        },
                    },
                );
            });

            return () => split.revert();
        },
        { scope: container },
    );

    return (
        <section ref={container} className="foot-section">
            <div className="foot-wrapper">
                <p className="foot-text">
                    Me desculpe pela demora e por ser pouco, te amo muito amor, quero viver com você para o resto da
                    vida
                </p>
                <span className="foot-signature">com todo o meu amor ♡</span>
            </div>
        </section>
    );
};

export default FootSection;
