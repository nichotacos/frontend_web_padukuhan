import { Button, Card, CardBody, CardFooter, CardHeader, Image, Spinner } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { FetchKontenLimited } from "../api/ApiContent";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContentPage() {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const cardsRef = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await FetchKontenLimited(3);
                setContents(response.data);
            } catch (error) {
                console.error('Error fetching contents:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (!loading) {
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: 1,
                    },
                }
            );
        }
    }, [loading]);

    if (loading) {
        return <Spinner size="lg" color="warning" className="my-2 lg:my-8 flex flex-col justify-center">Loading...</Spinner>
    }

    const handleReadMore = (id) => {
        navigate(`/konten/${id}`);
    }

    const handleViewAll = () => {
        navigate("/konten");
    }

    return (
        <>
            <div className="bg-duwet-main-bg flex flex-row justify-center align-middle">
                <div className="lg:h-screen w-3/4 flex flex-col justify-center items-center">
                    <div className="font-poppins text-3xl lg:text-4xl font-bold mb-2 mt-4 lg:mb-8 bg-duwet-primary w-full text-center text-white py-2 lg:py-4 rounded-2xl">Berita Terbaru</div>
                    {loading ? (
                        <div className="flex justify-center items-center my-2 lg:my-8">
                            <Spinner size="lg" color="warning">Loading...</Spinner>
                        </div>
                    ) : (contents.length == 0 ? (
                        <div className="text-duwet-dark-text font-inter text-2xl my-8 font-bold">Tidak ada berita terbaru</div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-8">
                            {contents.map((content, index) => (
                                <Card key={content.id} ref={el => cardsRef.current[index] = el} shadow="lg" className="w-64 lg:w-72">
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
                    ))}
                    <Button auto className="font-semibold bg-amber-500 text-white mt-2 lg:mt-8 w-6/12 lg:w-2/12 mb-8 lg:mb-0" onClick={handleViewAll}>Lihat lebih banyak</Button>
                </div>
            </div>
        </>
    );
}
