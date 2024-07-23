import pakDukuh from '/img/pak-dukuh.png';

export default function Sambutan() {
    const textClass = "text-white font-inter text-xs lg:text-sm font-semibold px-2 lg:px-16 leading-relaxed lg:tracking-wide";

    return (
        <>
            <div className='bg-lime-100'>
                <div className="h-screen flex flex-row items-center justify-center content-between gap-2 lg:gap-12">
                    <div className=" bg-duwet-primary w-4/6 lg:w-3/6 rounded-lg">
                        <p className="font-poppins text-lg lg:text-4xl font-bold text-white px-2 lg:px-16 pt-4 lg:pt-16 pb-8">Sambutan Dukuh</p>
                        <p className={textClass + "pb-1 lg:pb-4"}>Assalamu&apos;alaikum warahmatullahi wabarakatuh,</p>
                        <p className={textClass}>
                            Selamat datang di Padukuhan Duwet! Dengan penuh rasa syukur,
                            kami menyambut kedatangan Anda di padukuhan kami yang penuh kehangatan dan kebersamaan.
                            Padukuhan Duwet adalah tempat yang menjunjung tinggi nilai-nilai gotong royong dan persaudaraan,
                            di mana setiap warga berperan aktif dalam memajukan dan menjaga keharmonisan lingkungan kita.
                        </p>
                        <p className={textClass + "pt-1 lg:pt-4"}>
                            Kami berharap Anda dapat merasakan keramahan dan semangat kebersamaan yang ada di sini.
                            Mari bersama-sama kita jaga dan lestarikan keindahan serta kebersihan Padukuhan Duwet,
                            demi mewujudkan lingkungan yang nyaman dan sejahtera bagi kita semua.
                            Selamat menikmati kunjungan Anda, dan semoga pengalaman Anda di Padukuhan Duwet penuh dengan kenangan indah.
                        </p>
                        <p className={textClass + "py-2 lg:py-4"}>Wassalamu&apos;alaikum warahmatullahi wabarakatuh.</p>
                        <p className={textClass}>Dukuh Duwet</p>
                        <p className={textClass + "pb-4 lg:pb-16"}>Sukiyatno</p>
                    </div>
                    <div>
                        <img src={pakDukuh} alt="pak-dukuh" className="rounded-xl w-16 lg:w-72 " />
                    </div>
                </div>
            </div>
        </>
    );
}