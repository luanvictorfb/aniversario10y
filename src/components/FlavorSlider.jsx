const memories = [
    { image: "images/memoria-1.jpeg", caption: "O primeiro encontro" },
    { image: "images/memoria-2.jpeg", caption: "A primeira viagem" },
    { image: "images/memoria-3.jpeg", caption: "O primeiro 'eu te amo'" },
    { image: "images/memoria-4.jpeg", caption: "Aquele show inesquecível" },
    { image: "images/memoria-4.mp4", caption: "Nosso cantinho" },
    { image: "images/memoria-6.jpeg", caption: "Hoje, 10 anos depois" },
];

const FlavorSlider = () => {
    return (
        <div className="slider-wrapper h-full flex items-center">
            <div className="flavors h-full flex flex-row items-center gap-6 sm:gap-10 md:gap-16 lg:gap-24 2xl:gap-36 flex-nowrap">
                {memories.map((memory, index) => {
                    const isVideo = memory.image.endsWith(".mp4");

                    return (
                        <div
                            key={memory.caption}
                            className={`relative z-30 flex-none w-[78vw] max-w-[340px] sm:w-[60vw] sm:max-w-[440px] lg:w-[44vw] lg:max-w-[560px] h-[54vh] sm:h-[62vh] lg:h-[70vh] transition-transform ${
                                index % 2 === 0 ? "rotate-1 sm:rotate-2" : "-rotate-1 sm:-rotate-2"
                            }`}
                        >
                            {isVideo ? (
                                <video
                                    src={memory.image}
                                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] lg:border-[.6vw] border-white shadow-xl sm:shadow-2xl"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={memory.image}
                                    alt={memory.caption}
                                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl border-4 sm:border-[6px] lg:border-[.6vw] border-white shadow-xl sm:shadow-2xl"
                                />
                            )}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl sm:rounded-b-3xl" />
                            <h3 className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white text-sm sm:text-2xl md:text-3xl font-semibold uppercase tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] z-10">
                                {memory.caption}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FlavorSlider;
