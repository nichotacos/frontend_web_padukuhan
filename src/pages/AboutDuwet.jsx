import embung from "../assets/embung.jpg";

export default function AboutDuwet() {
    return (
        <>
            <div className="bg-slate-400">
                <div className=" h-screen flex flex-row items-center">
                    {/* <div className="h-4/6 w-7/12 overflow-hidden">
                        <img src={embung} alt="duwet" className="scale-150 rounded-xl" />
                    </div> */}
                    <div className="absolute right-80 bg-duwet-primary w-2/6 rounded-lg">
                        <p className="font-poppins text-5xl font-bold text-white px-16 pt-16 pb-8">Tentang Duwet</p>
                        <p className="text-white font-inter text-lg font-semibold px-16 pt-8 pb-16">Padukuhan Duwet adalah sebuah padukuhan yang
                            terletak di Kalurahan Jerukwudel, Kapanewon
                            Girisubo, Kabupaten Gunungkidul, DIY.  Padukuhan
                            Duwet terdiri atas 3 RT dan 1 RW.</p>
                    </div>
                </div>
            </div>
        </>
    );
}