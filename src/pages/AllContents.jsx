import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FetchKonten } from "../api/ApiContent";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loading";
import moment from "moment";

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

    if (loading) {
        return <Loader />;
    }

    if (!contents) {
        return <div>Content not found.</div>;
    }

    const handleReadMore = (id) => {
        navigate(`/konten/${id}`);
    }

    return (
        <>
            <div className="bg-duwet-main-bg flex flex-row justify-center align-middle">
                <div className="mt-8 w-3/4 flex flex-col justify-center items-center align-middle mb-8">
                    <p className="font-poppins text-2xl md:text-2xl lg:text-4xl font-semibold mb-8 text-white w-5/6 lg:w-1/3 text-center bg-duwet-primary py-2 lg:py-4 rounded-2xl">Semua Berita</p>
                    <div className="flex flex-row gap-8 flex-wrap justify-evenly ">
                        {contents.map((content) => (
                            <Card key={content.id} shadow="lg" className="w-64 lg:w-72">
                                <CardHeader>
                                    <Image src={content.image} alt={content.title} className="aspect-square" />
                                </CardHeader>
                                <CardBody>
                                    <p className="font-poppins font-bold text-lg">{content.title}</p>
                                    <p className="line-clamp-3 text-sm mt-2">{content.content}</p>
                                </CardBody>
                                <CardFooter className="flex flex-row justify-between">
                                    <Button auto className="font-semibold bg-amber-500 text-white" onClick={() => handleReadMore(content.id)}>Baca Berita</Button>
                                    <p className="font-inter text-xs text-pretty ">{moment(content.created_at).format('LL')}</p>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}