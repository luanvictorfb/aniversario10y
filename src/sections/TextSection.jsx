import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const TextSection = () => {
    useGSAP(() => {
        const firstMsgSplit = SplitText.create(".first-message", {
            type: "words",
        });

        gsap.to(firstMsgSplit.words, {
            color: "#faeade",
            ease: "power1.in",
            stagger: 1,
            scrollTrigger: {
                trigger: ".message-content",
                scrub: 1,
                start: "top 70%",
                end: "center center",
            },
        });

        return () => firstMsgSplit.revert();
    });

    return (
        <section className="message-content">
            <div className="container mx-auto flex-center py-16 sm:py-24 md:py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message text-purple">
                            É bizarro perceber como o tempo passou rápido
                        </h1>
                    </div>

                    <div className="flex-center mt-8 sm:mt-14 md:mt-20">
                        <div className="max-w-md px-4 sm:px-8 flex-center overflow-hidden">
                            <p className="text-base sm:text-xl md:text-2xl font-medium tracking-wide text-center text-[#523122]">
                                Te amo mil milhões mulher!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextSection;
