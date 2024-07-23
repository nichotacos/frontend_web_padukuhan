import { Image } from "@nextui-org/react";


export default function VisitedPlaces() {
    return (
        <div className="bg-duwet-main-bg flex flex-row justify-center align-middle">
            <div className="h-3/4 w-5/6 flex flex-col justify-center items-center">
                <div className="font-poppins text-4xl font-bold mb-8 bg-duwet-primary w-full text-center text-white py-4 rounded-2xl">Top Places</div>
                <div className="flex flex-row justify-around w-full">
                    <Image src="/img/pak-dukuh.png" alt="duwet" className="rounded-xl w-64 h-96" isZoomed />
                    <Image src="/img/pak-dukuh.png" alt="duwet" className="rounded-xl w-64 h-96" isZoomed />
                    <Image src="/img/pak-dukuh.png" alt="duwet" className="rounded-xl w-64 h-96" isZoomed />
                </div>
            </div>
        </div>
    )
}