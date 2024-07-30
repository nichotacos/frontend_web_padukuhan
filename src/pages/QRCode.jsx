import { useEffect, useRef } from "react";
import { Image, Link } from "@nextui-org/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import qr_code from "/img/qr_code.png";

export default function QRCode() {
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
        <div className="bg-lime-100 flex flex-col justify-center items-center gap-8 py-8 lg:py-8">
            <div ref={containerRef} className="bg-duwet-primary flex flex-col justify-center py-4 w-3/4 rounded-2xl mb-0 lg:mb-8">
                <h1 className="font-poppins text-3xl lg:text-4xl font-bold text-center text-white">Output dan Dokumentasi Program Kerja</h1>
            </div>
            <div ref={containerRef} className="flex flex-col md:flex-row lg:flex-row gap-8 items-center">
                <Image src={qr_code} alt="Struktur Organisasi Padukuhan" className="h-48 md:h-48 lg:h-96" />
            </div>
            <Link href="https://linktr.ee/kknduwet" target="blank" className="text-white">
                <div className="bg-duwet-primary p-4 rounded-xl font-inter">
                    Folder Output dan Dokumentasi
                </div>
            </Link>
        </div>
    );
}
