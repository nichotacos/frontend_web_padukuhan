import embung from "../assets/embung.jpg";

export default function AboutDuwet() {
    return (
        <>
            <div className="bg-duwet-main-bg">
                <div className="h-screen lg:h-screen flex flex-row items-center">
                    <div className="h-4/6 w-7/12 overflow-hidden">
                        <img src={embung} alt="duwet" className="scale-150 rounded-xl" />
                    </div>
                    <div className="absolute right-0 lg:right-80 bg-duwet-primary w-1/2 lg:w-2/6 rounded-lg">
                        <p className="font-poppins text-lg md:text-3xl lg:text-5xl font-bold text-white px-2 lg:px-16 lg:pt-16 lg:pb-4">Tentang Duwet</p>
                        <p className="text-white font-inter text-xs lg:text-base font-semibold px-2 lg:px-16 lg:pt-4 lg:pb-16">Padukuhan Duwet adalah sebuah padukuhan yang
                            terletak di Kalurahan Jerukwudel, Kapanewon
                            Girisubo, Kabupaten Gunungkidul, DIY. Padukuhan
                            Duwet terdiri atas 3 RT dan 1 RW.</p>
                    </div>
                </div>
            </div>
        </>
    );
}