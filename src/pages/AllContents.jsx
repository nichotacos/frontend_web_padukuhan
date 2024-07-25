import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FetchKonten } from "../api/ApiContent";
import { useNavigate } from "react-router-dom";

export default function AllContents() {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchKonten();
                setContents(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching contents:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const handleReadMore = (id) => {
        navigate(`/konten/${id}`);
    }

    return (
        <>
            {loading ? <p>Loading...</p> : (
                <div className="bg-duwet-main-bg flex flex-row justify-center align-middle">
                    <div className="mt-8 w-3/4 flex flex-col justify-center items-center align-middle mb-8">
                        <p className="font-poppins text-4xl font-semibold mb-8 text-white w-1/3 text-center bg-duwet-primary py-4 rounded-2xl">Semua Berita</p>
                        <div className="flex flex-row gap-8 flex-wrap justify-evenly ">
                            {contents.map((content) => (
                                <Card key={content.id} shadow className="w-72">
                                    <CardHeader>
                                        <Image src={content.image} alt={content.title} className="aspect-square" />
                                    </CardHeader>
                                    <CardBody>
                                        <p className="font-poppins font-bold text-lg">{content.title}</p>
                                        <p className="truncate">{content.content}</p>
                                    </CardBody>
                                    <CardFooter>
                                        <Button auto color="warning" className="font-semibold" onClick={() => handleReadMore(content.id)}>Read More</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}