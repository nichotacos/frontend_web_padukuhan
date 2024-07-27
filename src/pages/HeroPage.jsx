import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroPage() {
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const p3Ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            p1Ref.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.2 }
        );
        gsap.fromTo(
            p2Ref.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.5 }
        );
        gsap.fromTo(
            p3Ref.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.7 }
        );
    }, []);

    return (
        <>
            <p ref={p1Ref} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-poppins font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                Selamat Datang
            </p>
            <p ref={p2Ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white font-poppins font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                Di Padukuhan Duwet
            </p>
            <p ref={p3Ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-white font-poppins font-bold mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                Jerukwudel, Girisubo
            </p>
        </>
    );
}
