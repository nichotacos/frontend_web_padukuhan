import pakDukuh from '/img/pak-dukuh.png';

export default function Sambutan() {
    const textClass = "text-white font-inter text-sm font-semibold px-16 leading-relaxed tracking-wide";

    return (
        <>
            <div className='bg-lime-100'>
                <div className="h-screen flex flex-row items-center justify-center content-between gap-12">
                    <div className=" bg-duwet-primary w-3/6 rounded-lg">
                        <p className="font-poppins text-4xl font-bold text-white px-16 pt-16 pb-8">Sambutan Kepala Dukuh</p>
                        <p className={textClass + " pb-4"}>Assalamu&apos;alaikum warahmatullahi wabarakatuh,</p>
                        <p className={textClass}>
                            Selamat datang di Padukuhan Duwet! Dengan penuh rasa syukur,
                            kami menyambut kedatangan Anda di padukuhan kami yang penuh kehangatan dan kebersamaan.
                            Padukuhan Duwet adalah tempat yang menjunjung tinggi nilai-nilai gotong royong dan persaudaraan,
                            di mana setiap warga berperan aktif dalam memajukan dan menjaga keharmonisan lingkungan kita.
                        </p>
                        <p className={textClass + " pt-4"}>
                            Kami berharap Anda dapat merasakan keramahan dan semangat kebersamaan yang ada di sini.
                            Mari bersama-sama kita jaga dan lestarikan keindahan serta kebersihan Padukuhan Duwet,
                            demi mewujudkan lingkungan yang nyaman dan sejahtera bagi kita semua.
                            Selamat menikmati kunjungan Anda, dan semoga pengalaman Anda di Padukuhan Duwet penuh dengan kenangan indah.
                        </p>
                        <p className={textClass + " py-4"}>Wassalamu&apos;alaikum warahmatullahi wabarakatuh.</p>
                        <p className={textClass}>Kepala Padukuhan Duwet</p>
                        <p className={textClass + " pb-16"}>Sukiyatno</p>
                    </div>
                    <div>
                        <img src={pakDukuh} alt="pak-dukuh" className="rounded-xl w-72" />
                    </div>
                </div>
            </div>
        </>
    );
}