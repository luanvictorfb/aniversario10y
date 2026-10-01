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
                scrub: true,
                start: "top center",
                end: "30% center",
            },
        });
    });
    return (
        <section className="message-content">
            <div className="container mx-auto flex-center py-28 relative">
                <div className="w-full h-full">
                    <div className="msg-wrapper">
                        <h1 className="first-message text-purple">É bizarro perceber como o tempo passou rapido</h1>
                    </div>

                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md  px-10 flex-centrer overflow-hidden">
                            <p>Te amo mil milhôes mulher!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextSection;
