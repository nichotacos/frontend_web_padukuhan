import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FetchKontenLimited } from "../api/ApiContent";
import { getGambarKonten } from "../api";
import { useNavigate } from "react-router-dom";

export default function ContentPage() {
    const [contents, setContents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await FetchKontenLimited(4);
            setContents(response.data);
            console.log(response.data);
        }

        fetchData();
    }, []);

    const handleReadMore = (id) => {
        navigate(`/konten/${id}`);
    }

    const handleViewAll = () => {
        navigate("/konten");
    }

    return (
        <>
            <div className="bg-duwet-main-bg flex flex-row justify-center align-middle">
                <div className=" h-screen w-3/4 flex flex-col justify-center items-center">
                    <div className="font-poppins text-4xl font-bold mb-8 bg-duwet-primary w-full text-center text-white py-4 rounded-2xl">Berita Terbaru</div>
                    <div className="flex flex-row gap-8">
                        {contents.map((content) => (
                            <Card key={content.id} shadow className="w-72">
                                <CardHeader>
                                    <Image src={getGambarKonten(content.image)} alt={content.title} className="aspect-square" />
                                </CardHeader>
                                <CardBody>
                                    <p className="font-poppins font-bold text-lg">{content.title}</p>
                                    <p className="truncate">{content.content}</p>
                                </CardBody>
                                <CardFooter>
                                    <Button auto className="font-semibold bg-amber-500 text-white" onClick={() => handleReadMore(content.id)}>Read More</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <Button auto className="font-semibold bg-amber-500 text-white mt-8 w-1/12" onClick={handleViewAll}>Lihat Semua</Button>
                </div>
            </div>
        </>
    );
}