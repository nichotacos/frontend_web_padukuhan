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
                    <div className="flex flex-row gap-8 flex-wrap justify-evenly min-h-screen">
                        {contents.length > 0 ? contents.map((content, index) => (
                            <Card key={index} shadow className="w-80 mb-8">
                                <CardHeader>
                                    <Image src={content.image} alt={content.title} className="w-80 h-48 object-cover" />
                                </CardHeader>
                                <CardBody>
                                    <h3 className="font-poppins text-lg font-semibold text-duwet-primary">{content.title}</h3>
                                    <p className="font-inter text-sm text-pretty">{moment(content.created_at).format('LL')}</p>
                                    <p className="font-inter text-sm text-pretty">{content.content.substring(0, 100)}...</p>
                                </CardBody>
                                <CardFooter>
                                    <Button color="warning" onPress={() => handleReadMore(content.id)}>Baca Selengkapnya</Button>
                                </CardFooter>
                            </Card>
                        )) : <div className="text-duwet-dark-text font-inter text-2xl my-8 font-bold">Tidak ada berita terbaru</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}