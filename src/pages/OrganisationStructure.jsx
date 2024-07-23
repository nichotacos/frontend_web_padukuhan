import SO_KarangTaruna from "/img/SO_KarangTaruna.png";
import SO_PokTan from "/img/SO_PokTan.png";

import { Image } from "@nextui-org/react";

export default function OrganisationStructure() {
    return (
        <>
            <div className="bg-duwet-main-bg h-5/6 flex flex-col justify-center items-center gap-8">
                <div className="bg-duwet-primary flex flex-col justify-center py-4 w-3/4 rounded-2xl mb-8">
                    <h1 className="font-poppins text-4xl font-bold text-center text-white">Struktur Organisasi</h1>
                </div>
                <div className="flex flex-row gap-8">
                    <Image src={SO_KarangTaruna} alt="Struktur Organisasi Karang Taruna" className="h-72" />
                    <Image src={SO_PokTan} alt="Struktur Organisasi Poktan" className="h-72" />
                </div>
            </div>
        </>
    )
}