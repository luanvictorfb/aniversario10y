// PhotoSection.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/all";
import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const PhotoSection = () => {
    return (
        <section className="flavor-section">
            <div className="flavor-track h-full flex lg:flex-row flex-col items-center relative">
                <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
                    <FlavorTitle />
                </div>
                <div className="h-full">
                    <FlavorSlider />
                </div>
            </div>
        </section>
    );
};

export default PhotoSection;