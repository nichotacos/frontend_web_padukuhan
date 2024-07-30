import { useEffect, useRef } from "react";
import { Image } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import SO_KarangTaruna from "/img/SO_KarangTaruna.png";
import SO_PokTan from "/img/SO_PokTan.png";
import SO_Padukuhan from "/img/SO_Padukuhan.png";

export default function VideoProfile() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="bg-duwet-main-bg lg:h-5/6 flex flex-col justify-center items-center gap-8 py-8 lg:py-0">
            <div ref={containerRef} className="bg-duwet-primary flex flex-col justify-center py-4 w-3/4 rounded-2xl mb-4 lg:mb-8">
                <h1 className="font-poppins text-3xl lg:text-4xl font-bold text-center text-white">Video Profil Padukuhan</h1>
            </div>
            <div ref={containerRef} className="flex flex-col md:flex-row lg:flex-row gap-8 items-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1kSjELHC6F4?si=zFV-mPKErCuoF6IG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    );
}
