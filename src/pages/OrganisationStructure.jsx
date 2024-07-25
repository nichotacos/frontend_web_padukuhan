import SO_KarangTaruna from "/img/SO_KarangTaruna.png";
import SO_PokTan from "/img/SO_PokTan.png";
import SO_Padukuhan from "/img/SO_Padukuhan.png";

import { Image } from "@nextui-org/react";

export default function OrganisationStructure() {
    return (
        <>
            <div className="bg-duwet-main-bg lg:h-5/6 flex flex-col justify-center items-center gap-8 py-8 lg:py-0">
                <div className="bg-duwet-primary flex flex-col justify-center py-4 w-3/4 rounded-2xl mb-4 lg:mb-8">
                    <h1 className="font-poppins text-3xl lg:text-4xl font-bold text-center text-white">Struktur Organisasi</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <Image src={SO_Padukuhan} alt="Struktur Organisasi Padukuhan" className="h-48 lg:h-72" />
                    <Image src={SO_KarangTaruna} alt="Struktur Organisasi Karang Taruna" className="h-48 lg:h-72" />
                    <Image src={SO_PokTan} alt="Struktur Organisasi Poktan" className="h-48 lg:h-72" />
                </div>
            </div>
        </>
    )
}