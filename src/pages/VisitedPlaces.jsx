import { Image } from "@nextui-org/react";


export default function VisitedPlaces() {
    return (
        <div className="bg-duwet-accent flex flex-row justify-center align-middle">
            <div className="h-3/4 w-5/6 flex flex-col justify-center items-center">
                <div className="font-poppins text-3xl lg:text-4xl font-bold mb-2 mt-8 lg:mb-8 bg-duwet-primary w-full lg:w-1/2 text-center text-white py-2 lg:py-4 rounded-2xl">Top Places</div>
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 mb-8 justify-around w-full">
                    <Image src="/img/pak-dukuh.png" alt="duwet" className="rounded-xl lg:w-64 lg:h-96" isZoomed />
                    <Image src="/img/pak-dukuh.png" alt="duwet" className="rounded-xl lg:w-64 lg:h-96" isZoomed />
                    <Image src="/img/pak-dukuh.png" alt="duwet" className="rounded-xl lg:w-64 lg:h-96" isZoomed />
                </div>
            </div>
        </div>
    )
}