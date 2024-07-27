import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import embung from '../assets/embung.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutDuwet() {
    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(imgRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(textRef.current,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        );
    }, []);

    return (
        <div className="bg-duwet-main-bg">
            <div className="h-screen lg:h-screen flex flex-row items-center justify-center lg:justify-start">
                <div className="w-0 h-0 lg:h-4/6 lg:w-7/12 overflow-hidden invisible lg:visible">
                    <img ref={imgRef} src={embung} alt="duwet" className="scale-150 rounded-xl" />
                </div>
                <div ref={textRef} className="lg:absolute sm:right-20 md:right-50 lg:right-80 bg-duwet-primary w-3/4 lg:w-2/6 rounded-lg">
                    <p className="font-poppins text-3xl text-center lg:text-left md:text-3xl lg:text-5xl font-bold text-white px-2 lg:px-16 pt-2 lg:pt-16 pb-2 lg:pb-4">Tentang Duwet</p>
                    <p className="text-white font-inter text-center lg:text-left text-lg lg:text-base font-semibold px-2 lg:px-16 lg:pt-4 pb-2 lg:pb-16">Padukuhan Duwet adalah sebuah padukuhan yang
                        terletak di Kalurahan Jerukwudel, Kapanewon
                        Girisubo, Kabupaten Gunungkidul, DIY. Padukuhan
                        Duwet terdiri atas 3 RT dan 1 RW.</p>
                </div>
            </div>
        </div>
    );
}
