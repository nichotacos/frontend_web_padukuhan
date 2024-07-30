import { useEffect, useRef } from "react";
import { Image } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisitedPlaces() {
    const containerRefs = useRef([]);
    const addToRefs = (el) => {
        if (el && !containerRefs.current.includes(el)) {
            containerRefs.current.push(el);
        }
    };

    useEffect(() => {
        const leftDivs = containerRefs.current.filter((_, index) => index % 2 === 0);
        const rightDivs = containerRefs.current.filter((_, index) => index % 2 !== 0);

        gsap.fromTo(leftDivs,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: leftDivs,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(rightDivs,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: rightDivs,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="bg-lime-100 flex flex-row justify-center align-middle">
            <div className="h-3/4 w-5/6 flex flex-col justify-center items-center">
                <div className="font-poppins text-3xl lg:text-4xl font-bold mb-2 mt-8 lg:mb-8 bg-duwet-primary w-full lg:w-1/2 text-center text-white py-2 lg:py-4 rounded-2xl">Titik Lokasi</div>
                <div className="flex flex-col gap-4 md:flex-row lg:flex-row lg:gap-0 mb-8 justify-around items-center w-full">
                    <div className="flex flex-col items-center text-center" ref={addToRefs}>
                        <Image src="/img/balai_dusun.jpeg" alt="Balai Dusun Duwet" className="rounded-xl w-48 h-72 md:w-48 md:h-72 lg:w-64 lg:h-96" isZoomed />
                        <p className="font-inter text-lg mt-4 font-semibold bg-duwet-primary w-3/4 rounded-md py-2 text-white">Balai Dusun Duwet</p>
                    </div>
                    <div className="flex flex-col items-center text-center" ref={addToRefs}>
                        <Image src="/img/embung-ngrancah.jpeg" alt="Embung Ngrancah" className="rounded-xl w-48 h-72 md:w-48 md:h-72 lg:w-64 lg:h-96" isZoomed />
                        <p className="font-inter text-lg mt-4 font-semibold bg-duwet-primary w-3/4 rounded-md py-2 text-white">Embung Ngrancah</p>
                    </div>
                    <div className="flex flex-col items-center text-center" ref={addToRefs}>
                        <Image src="/img/masjid_al_furqon.jpeg" alt="Masjid Al-Furqon" className="rounded-xl w-48 h-72 md:w-48 md:h-72 lg:w-64 lg:h-96" isZoomed />
                        <p className="font-inter text-lg mt-4 font-semibold bg-duwet-primary w-3/4 rounded-md py-2 text-white">Masjid Al-Furqon</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
