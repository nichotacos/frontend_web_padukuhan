import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchKontenDetail } from "../api/ApiContent";
import { getGambarKonten } from "../api";
import { Image } from "@nextui-org/react";
import moment from "moment";


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
        return <div>Loading...</div>;
    }

    if (!content) {
        return <div>Content not found.</div>;
    }

    console.log(content);

    return (
        <div className="bg-lime-100 flex flex-col items-center pt-8 h-screen">
            <h1 className="font-poppins text-3xl font-semibold">{content.title}</h1>
            <p className="font-inter text-xs mb-8 text-pretty">{moment(content.created_at).format('LL')}</p>
            <div className="w-3/4 flex flex-row">
                <div>
                    <Image src={getGambarKonten(content.image)} alt={content.title} className="w-96 h-w-96" />
                </div>
                <div className="content-start ml-8">
                    <p className="font-inter text-base text-pretty">{content.content}</p>
                </div>
            </div>
        </div>
    );
}