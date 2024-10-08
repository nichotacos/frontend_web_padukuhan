import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchKontenDetail } from "../api/ApiContent";
import { Image } from "@nextui-org/react";
import moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loading";


export default function ContentDetail() {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContentDetail = async () => {
            try {
                const response = await FetchKontenDetail(id);
                setContent(response.data[0]);
            } catch (error) {
                console.error('Error fetching content detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContentDetail();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!content) {
        return <div>Content not found.</div>;
    }

    return (
        <>
            <div className="bg-lime-100 flex flex-col items-center pt-8 pb-20">
                <h1 className="font-poppins text-3xl font-semibold text-center mb-2">{content.title}</h1>
                <p className="font-inter text-xs mb-8 text-pretty">{moment(content.created_at).format('LL')}</p>
                <div className="w-3/4 flex flex-col items-center lg:flex-row">
                    <div className="basis-2/5">
                        <Image src={content.image} alt={content.title} className="w-96 h-w-96" />
                    </div>
                    <div className="content-start ml-0 mt-2 lg:ml-8 basis-3/5">
                        <p className="font-inter text-base text-pretty text-justify">{content.content}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}