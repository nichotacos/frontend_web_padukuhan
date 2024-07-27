import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image } from '@nextui-org/react';
import pakDukuh from '/img/pak-dukuh.png';

gsap.registerPlugin(ScrollTrigger);

export default function Sambutan() {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, x: -100 },
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

        gsap.fromTo(imageRef.current,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                },
            }
        );
    }, []);

    const textClass = "text-white font-inter text-xs lg:text-base font-semibold px-2 lg:px-16 leading-normal lg:tracking-normal";

    return (
        <>
            <div className='bg-lime-100'>
                <div className="flex flex-col-reverse py-8 md:flex-row lg:flex-row items-center justify-center content-between gap-4 lg:gap-12">
                    <div ref={textRef} className=" bg-duwet-primary w-11/12 md:w-4/6 lg:w-3/6 rounded-lg">
                        <p className="font-poppins text-lg lg:text-5xl font-bold text-white px-2 lg:px-16 pt-4 lg:pt-16 pb-4 md:pb-8 lg:pb-8">Sambutan Dukuh</p>
                        <p className={textClass + " pb-2 lg:pb-4"}>Assalamu&apos;alaikum warahmatullahi wabarakatuh,</p>
                        <p className={textClass}>
                            Selamat datang di Padukuhan Duwet! Dengan penuh rasa syukur,
                            kami menyambut kedatangan Anda di padukuhan kami yang penuh kehangatan dan kebersamaan.
                            Padukuhan Duwet adalah tempat yang menjunjung tinggi nilai-nilai gotong royong dan persaudaraan,
                            di mana setiap warga berperan aktif dalam memajukan dan menjaga keharmonisan lingkungan kita.
                        </p>
                        <p className={textClass + " pt-1 lg:pt-4"}>
                            Kami berharap Anda dapat merasakan keramahan dan semangat kebersamaan yang ada di sini.
                            Mari bersama-sama kita jaga dan lestarikan keindahan serta kebersihan Padukuhan Duwet,
                            demi mewujudkan lingkungan yang nyaman dan sejahtera bagi kita semua.
                            Selamat menikmati kunjungan Anda, dan semoga pengalaman Anda di Padukuhan Duwet penuh dengan kenangan indah.
                        </p>
                        <p className={textClass + " py-2 lg:pt-4 pb-8"}>Wassalamu&apos;alaikum warahmatullahi wabarakatuh.</p>
                        <p className={textClass + " pt-0"}>Sukiyatno</p>
                        <p className={textClass + " pb-4 lg:pb-16"}>Dukuh Duwet</p>
                    </div>
                    <div ref={imageRef} className='flex flex-col items-center'>
                        <Image src={pakDukuh} alt="pak-dukuh" className="w-72 lg:w-96" isBlurred />
                        <div className='mt-2 lg:mt-4 text-center'>
                            <p className='font-inter text-duwet-primary font-bold text-3xl'>Sukiyatno</p>
                            <p className='font-inter text-duwet-primary font-semibold text-lg mt-'>Dukuh Duwet</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
